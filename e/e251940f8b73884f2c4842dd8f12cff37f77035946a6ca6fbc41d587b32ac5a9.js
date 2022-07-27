class PluginFireBaseImagenDigital {

	constructor (config, callback = [], logs = []) {
		var FireBasePlugin = FireBasePlugin || {}
		this.app = LibrerysFirebase.initializeApp(config);
		this.db = LibrerysFirebase.firestore(this.app);
		this.provider = false;
		this.user = null;
		this.profile = null;
		this.allBooks = null;
		this.tags = null;
		this.ready = true;
		this.token = null;
		this.Fav = document.createElement("div");
		this.Messenger = document.createElement("div");
		this.Calls = callback;
		this.waitingList = [];
		this.logs = logs;
		this.pendingCred = null;
		this.GetUser();
		this.Ready();
	}

	ValidationUser(callback) {
		return new Promise((resolve, reject) => {
			if (this.user) {
				resolve(this.user)
			} else {
				reject({})
			}
		})
	}

	SaveStorageImage(file, blob) {

		return new Promise((resolve, reject) => {
			var storageRef = LibrerysFirebase.storage().ref();
			let type_file = file.type.split('/');
			let Storage = storageRef.child(this.user.uid + '.' + type_file[1]);
			Storage.put(blob).then((snapshot) => {
				snapshot.ref.getDownloadURL().then((link) => {
					resolve(link)
				});
			}).catch((error) => {
				reject(error);
			});

		})
	}


	Ready(container = this.Calls) {
		if (container.length > 0) {
			let stack = container[0];
			if (typeof stack == "function") {
				stack(this);
			} else {
				console.log("No era una función no sera ejecutado");
			}
			container.shift();
			this.Ready(container);
		}

	}


	ResquestAllTags(callback = false) {
		if (this.tags === null) {
			this.GetBookTags(callback);
		} else {
			if (typeof callback == "function") {
				callback();
			}
		}


	}

	Sender(data, event) {
		this.CreateEvent(data, event, this.Messenger);
	}

	SetCall(data) {
		this.Calls = data;
	}
	GetUser() {

		return new Promise((resolve, reject) => {
			if (this.user) {
				resolve(this.user);
			} else {
				LibrerysFirebase.auth().onAuthStateChanged((user) => {

					if (user) {
						this.user = user;
						//	this.Sender(user, "Profile");
						this.Ready(this.waitingList);
						this.GetUserProfile();
						resolve(user);
					} else {
						console.log("No hay usuario disponible");
						if (window.location.pathname == '/mis-favoritos' || window.location.pathname == '/mis-intereses' || window.location.pathname == '/mi-perfil' || window.location.pathname == '/mis-noticias') {
							window.location.href = "/";
						}
						//
					}

				}, reject);
			}
		});

	}

	providerloginpopup() {
		let provider = this.provider;
		LibrerysFirebase.auth().signInWithPopup(provider).then(async (result) => {
			this.token = result.credential.accessToken;
			this.user = result.user;
			await this.GetUserProfile();
			if (localStorage.getItem('linkUserEmail') == 'true') {
				result.user.linkAndRetrieveDataWithCredential(this.pendingCred).then(async (usercred) => {
					localStorage.setItem('linkUserEmail', 'false');
					localStorage.setItem('emailUser', '')
					localStorage.setItem('methods', '');
					if (typeof this.profile == 'undefined') {
						let userData = {
							name: this.user.displayName || null,
							birthdate: null,
							gender: null,
							phone: null,
							email: this.user.email,
							image: this.user.photoURL || ''
						};

						await this.SetUser(userData);
						if (localStorage.getItem("reload") == 'true') {
							localStorage.removeItem('reload');
							location.reload();
						} else {
							window.location.href = await "/mi-perfil";
						}
					} else {
						if (localStorage.getItem("reload") == 'true') {
							localStorage.removeItem('reload');
							location.reload();
						} else {
							window.location.href = await "/mi-perfil";
						}
					}

				});

			} else {

				if (typeof this.profile == 'undefined') {
					let userData = {
						name: this.user.displayName || null,
						birthdate: null,
						gender: null,
						phone: null,
						email: this.user.email,
						image: this.user.photoURL || ''
					};

					await this.SetUser(userData);
					if (localStorage.getItem("reload") == 'true') {
						localStorage.removeItem('reload');
						location.reload();

					} else {
						window.location.href = await "/mi-perfil";
					}
				} else {

					if (localStorage.getItem("reload") == 'true') {
						localStorage.removeItem('reload');
						location.reload();
					} else {
						window.location.href = await "/mi-perfil";
					}

				}

			}


		}).catch((error) => {
			console.log("error: ", error)
			if (error.code === 'auth/account-exists-with-different-credential') {
				localStorage.setItem('linkUserEmail', 'true');

				this.pendingCred = error.credential;
				var email = error.email;
				LibrerysFirebase.auth().fetchSignInMethodsForEmail(email).then(async (methods) => {

					await localStorage.setItem('emailUser', email)
					await localStorage.setItem('methods', JSON.stringify(methods));
					InvokeModal({ template: "options" });

				});
			}
		});
	}


	Register({ email, password }, data, reload) {
		LibrerysFirebase.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				this.user = user;
				this.SetUser(data).then(() => {
					console.log("Nuevo usuario ha sido registrado");
					window.location.href = "/mi-perfil";

				});
			}).catch(function (error) {
				console.log(error);
			});
	}

	UpdateUser(data) {
		return this.ValidationUser().then(() => {
			return this.db.collection('/users')
				.doc(this.user.uid).update(data).then(() => { }).catch((error) => {
					console.log('Error add: ', error);
				});
		})
	}

	SetUser(data) {
		return this.ValidationUser().then(() => {
			return this.db.collection('/users').doc(this.user.uid).set(data).then((result) => {
				// this.GetUserProfile();
				return this.profile;
			}).catch((error) => {
				reject(error);
				console.log('Error add: ', error);
			});
		});
	}


	skeletonProfile() {
		let userData = {
			name: this.user.displayName || this.user.email,
			birthdate: null,
			gender: null,
			phone: null,
			email: this.user.email,
			image: this.user.photoURL || ''
		};
		this.SetUser(userData).then((data) => {
			this.Sender(data, "ProfileLoad");
		});
	}

	ProfileLoad(profile) {
		this.profile = profile;
		this.profile.image = this.profile.image || this.user.photoURL || imageDefault;
		this.profile.name = this.profile.name || this.user.displayName;
		this.profile.email = this.profile.email || this.user.email;
		this.Sender(this.profile, "ProfileLoad");
	}


	GetUserProfile() {
		return this.ValidationUser().then(() => {
			return this.db.collection('/users').doc(this.user.uid).get().then((result) => {
				let profile = result.data();
				console.log( "data usuario", profile.birthdate )
				//Cargando profile.
				if (profile) {
					console.log( "Cargando profile");
					this.ProfileLoad(profile);
				} else {
					//Creando un profile con los datos disponibles.
					console.log( "creando profile");
					this.skeletonProfile();
				}

				return profile;
			}).catch((error) => {
				console.log('Error add: ', error);
			});
		});
	}

	Login({ email, password }) {
		return LibrerysFirebase.auth().signInWithEmailAndPassword(email, password)
			.then(async (session) => {
				let user = session.user;
				this.user = user;

				this.user = {
					displayName: user.displayName || user.email,
					photoURL: user.photoURL,
					uid: user.uid,
				}
				if (localStorage.getItem('linkUserEmail') == 'true') {

					session.user.user.linkWithCredential(this.pendingCred).then((usercred) => {
						localStorage.setItem('linkUserEmail', 'false');
						localStorage.setItem('emailUser', '');
						localStorage.setItem('methods', '');
					});

				}
				if (localStorage.getItem("reload") == 'true') {
					localStorage.removeItem('reload');
					location.reload();
				} else {
					window.location.href = await "/mi-perfil";
				}

			})
			.catch((error) => {
				// validar
				localStorage.setItem('codeError', error.code);
				localStorage.setItem('messageError', error.message);
				console.log('Error Log pasword: ', error);

			});

	}
	googlelogin() {
		var provider = new LibrerysFirebase.auth.GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		this.provider = provider;
		this.providerloginpopup();
	}

	facebooklogin() {
		//Proveedor de  login con Facebook.
		var provider = new LibrerysFirebase.auth.FacebookAuthProvider();
		//provider.addScope('user_birthday');
		LibrerysFirebase.auth().languageCode = 'es';
		provider.setCustomParameters({
			'display': 'popup'
		});
		this.provider = provider;
		this.providerloginpopup();
	}

	applelogin() {
		// Proveedor de login con Apple
		var provider = new LibrerysFirebase.auth.OAuthProvider('apple.com');
		provider.addScope('email');
		provider.addScope('name');
		provider.setCustomParameters({
			//idioma de el popup
			locale: 'es'
		});
		provider.setCustomParameters({
			'display': 'popup'
		});
		this.provider = provider;
		this.providerloginpopup();
	}

	GetBookMark(callback) {

		return this.ValidationUser().then(() => {
			const booksRef = LibrerysFirebase.firestore()
				.collection('users/' + this.user.uid + '/bookmarks').orderBy("created", "desc");
			return booksRef.get()
				.then((result) => {
					this.allBooks = result.docs;
					this.listenFav(this.allBooks);
					result.docs.map(doc => {
						if (typeof callback == "function") {
							callback(doc);
						} else {
							console.log("error", typeof callback)
						}
					});
				});
		});

	}

	GetBookTags(callback) {
		return this.ValidationUser().then(() => {
			const booksRef = LibrerysFirebase.firestore()
				.collection('users/' + this.user.uid + '/tags');
			return booksRef.get()
				.then((result) => {
					this.tags = result.docs;
					this.Sender(this.tags, "tagsReady");
					if (typeof callback === "function") {
						callback();
					}
				});
		}).catch(