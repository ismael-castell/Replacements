/**
 * 문자를 Date형으로 변환
 * @param str 문자
 * @returns {null|Date}
 */
var convertDate = function (str) {
    var date = null;
    if (str) {
        var dateString = str;
        if (dateString.length === 8) {
            dateString += '000000';
        }
        var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
        dateString = dateString.replace(pattern, '$1-$2-$3 $4:$5:$6').replace(/-/g, '/');
        date = new Date(dateString);
        return date;
    } else {
        return null;
    }
};
/**
 * 오늘날짜 문자열 구하기
 * @returns {string}
 */
var today = function () {
    return dateFormat(new Date(), 'yyyyMMdd');
};

/**
 * url 정보 관리
 */
var urlInfo = new (function () {
    var referrer = document.referrer.toLowerCase();
    this.referrer =
        referrer.indexOf('joongang') > -1 || referrer.indexOf('joins') > -1 || referrer === ''
            ? 'visit'
            : referrer.indexOf('google') > -1
            ? 'google'
            : referrer.indexOf('naver') > -1
            ? 'naver'
            : referrer.indexOf('daum') > -1
            ? 'daum'
            : referrer.indexOf('kakao') > -1
            ? 'kakao'
            : referrer.indexOf('youtube') > -1
            ? 'youtube'
            : referrer.indexOf('facebook') > -1
            ? 'facebook'
            : referrer.indexOf('t.co') > -1
            ? 'twitter'
            : referrer.indexOf('instagram') > -1
            ? 'instagram'
            : 'etc';

    this.prev = referrer.indexOf('joongang') > -1 || referrer.indexOf('joins') > -1 ? referrer : '/';
    this.fullUrl = window.location.href;
    var urls = window.location.href.split('?');
    this.url = urls[0];
    this.checkUrl = this.url.substring(this.url.indexOf('://') + 3);
    if (this.checkUrl.endsWith('/')) {
        this.checkUrl = this.checkUrl.substring(0, this.checkUrl.length - 1);
    }
    var dirIdx = this.checkUrl.indexOf('/');
    this.path = '';
    if (dirIdx > -1) {
        this.path = this.checkUrl.substring(dirIdx);
    }
    this.params = [];
    if (urls.length > 1) {
        var params = urls[1].split('&');
        for (var i = 0; i < params.length; i++) {
            var key = params[i].split('=')[0];
            var value = params[i].split('=')[1];
            this.params[key] = value;
        }
    }
})();

/**
 * Date를 문자열로 변환
 * @param d Date
 * @param format 문자열 형식
 * @returns {String}
 */
var dateFormat = function (d, format) {
    if (!format) {
        format = 'yyyyMMdd';
    }
    var weekName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    var monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return format.replace(/(yyyy|yy|MMMM|MMM|MM|M|dd|E|hh|mm|z|ss|a\/p)/gi, function ($1) {
        switch ($1) {
            case 'yyyy':
                return d.getFullYear();
            case 'yy':
                return lpad(d.getFullYear() % 1000, 2);
            case 'MMMM':
                return monthAbbreviations[d.getMonth()] + '' + lpad(d.getMonth() + 1, 2);
            case 'MMM':
                return monthAbbreviations[d.getMonth()] + '' + lpad(d.getMonth() + 1, 2);
            case 'MM':
                return lpad(d.getMonth() + 1, 2);
            case 'M':
                return d.getMonth() + 1;
            case 'dd':
                return lpad(d.getDate(), 2);
            case 'E':
                return weekName[d.getDay()];
            case 'HH':
                return lpad(d.getHours(), 2);
            case 'hh':
                return lpad(d.getHours() % 12 ? d.getHours() % 12 : 12, 2);
            case 'mm':
                return lpad(d.getMinutes(), 2);
            case 'ss':
                return lpad(d.getSeconds(), 2);
            case 'z':
                return lpad(d.getMilliseconds(), 3);
            case 'a/p':
                return d.getHours() < 12 ? '오전' : '오후';
            default:
                return $1;
        }
    });
};

var lpad = function (value, len) {
    return _ss('0', len - value.toString().length) + value;
};

var _ss = function (value, len) {
    var s = '',
        i = 0;
    while (i++ < len) {
        s += value;
    }
    return s;
};

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function ($) {
    var TEMPLATE_API = WEB_PATH + '/_TP/';
    var LAST_VD_KEY = 'lastVD'; // 마지막 방문일
    var RECENT_VD_KEY = 'recentVD'; // 최근 방문일
    var SUBS_SET_KEY = 'subsSet'; // 구독 상품 데이터
    var RECENT_UD_KEY = 'recentUD'; // 구독 상품 최근 변경 기준일 meta key
    var VISIT_URLS = 'vu'; // 사용자의 방문 page url
    var SUBS_TARGET = 'subTarget'; // 오늘의 상품별 구독 대상 여부
    var SUBS_DATA_KEY = 'subsData'; // 상품별 사용자 조건 로그 정보
    var SUBS_REJECT = 'subsReject'; // 구독 권유 거절 정보
    var SUGGEST_LOG_KEY = 'suggestLog'; // 모니터링 위한 로그, 테스트 완료 후 삭제
    var SUGGEST_SCB_NO = 'suggestScbNo'; // 구독 신청 중인 구독설계 아이디
    var SUGGEST_MSG_TEMPLATE = 'subsMsg'; // 구독 신청 중인 구독설계 아이디
    var AFTER = 'A'; // AFTER
    var AND = 'A'; // AND
    var YES = 'Y'; // 예
    var NO = 'N'; // 아니오
    var STATE = {
        INIT: 0,
        ACCEPT: 1,
        ARTVIEW: 2 /*기사열람*/,
        REMIND: 3 /*재건의*/,
        MUST: 4 /*반드시 구독*/,
        AUTH_PROGRESS: 5,
        REJECT: 9
    }; // 구독 설계 제안 상태
    var PKG_DIV = {
        ALL: 'A',
        DIST: 'D',
        SECTION: 'S'
    }; // 패키지 구분 코드
    var LOGGING = typeof DEBUG !== 'undefined' ? DEBUG : false; // 콘솔 디버그 로그 출력 여부
    var REVISIT_ALLOW = false; //페이지 재방문 구독 제안 노출 여부
    var FADEOUT_DURATION = 2000; // 감사합니다 팝업 FADEOUT 시간
    var DEFAULT_AREA = '서울';
    var DEFAULT_SCROLL_DEEP_RATE = 30; // 구독 제안 노출 기본 스크롤 깊이

    // 서비스 페이지 url prefix
    var URL_PATTERN = {
        ARTICLE: ['/article/'],
        ARTPKG: ['/article/'],
        HOME: ['/', ''],
        REPORTER: ['/article/'],
        PKG: ['/article/'],
        JPOD: ['/jpod/episode/'],
        LETTER: ['/newsletter']
    };

    var ACCOUNT_URL = 'https://account.joongang.co.kr/';
    var SUGGEST_DELAY = 1000;
    var OFFER_METHOD = { LOGIN: 'LOGIN', SUBSCRIBE: 'SCB' };
    var SCROLL_UNIT = { PERCENT: 'PERCENT', PIXEL: 'PIXEL' };

    /**
     * 날짜비교
     * @param recentUD 기준시간
     * @param localRecentUD 비교시간
     * @returns {number}
     */
    var diffRecentDate = function (recentUD, localRecentUD) {
        if (recentUD) {
            return convertDate(recentUD) - (localRecentUD ? convertDate(localRecentUD) : 0);
        } else {
            return 0;
        }
    };
    /**
     * 날짜를 일수 계산
     * @param recentUD 기준시간
     * @param localRecentUD 비교시간
     * @returns {number}
     */
    var diffRecentDay = function (recentUD, localRecentUD) {
        if (recentUD) {
            if (recentUD.length === 8) {
                recentUD += '000000';
            }
            if (localRecentUD.length === 8) {
                localRecentUD += '000000';
            }
            var diffTime = convertDate(recentUD) - convertDate(localRecentUD);
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        } else {
            return 1;
        }
    };

    /**
     * 브라우저 유형
     */
    var browser = new (function () {
        var ua = navigator.userAgent.toLowerCase();

        this.CHROME = ua.indexOf('chrome') > -1;
        this.SAFARI = !this.CHROME && ua.indexOf('safari') > -1;
        this.EDGE = ua.indexOf('edg') > -1;
        this.AW = ua.indexOf('android') > -1;
        this.SI = ua.indexOf('samsung') > -1;
        this.IE = ua.indexOf('msie') > -1;
        this.ETC = !this.CHROME && !this.SAFARI && !this.EDGE && !this.AW && !this.SI && !this.IE;

        this.code = function () {
            if (this.IE) {
                return 'ie';
            } else if (this.SAFARI && !this.CHROME) {
                return 'safari';
            } else if (this.EDGE) {
                return 'edge';
            } else if (this.SI) {
                return 'samsung';
            } else if (this.IE) {
                return 'ie';
            } else if (this.CHROME) {
                return 'chrome';
            } else if (this.AW) {
                return 'andweb';
            } else {
                return 'etc';
            }
        };

        this.platform = function () {
            if (utils.device.pc) {
                return 'P'; // 피시
                // 2022-05-12 테블릿 처리 주석
                //} else if (utils.device.tablet && !utils.device.joongangApp) {
                //    return 'T';
            } else if ((utils.device.tablet || utils.device.mobile) && !utils.device.joongangApp) {
                return 'MW';
            } else if (utils.device.mobile && utils.device.joongangApp) {
                return 'MA';
            } else {
                return null;
            }
        };

        this.os = function () {
            if (utils.device.pc) {
                return ua.indexOf('windows') > -1 ? 'WIN' : 'MAC'; // 피시
            } else if (utils.device.mobile || utils.device.tablet) {
                return utils.device.and ? 'AND' : 'iOS';
            } else {
                return null;
            }
        };
    })();

    /**
     * 바이트수 계산
     * @param value 계산 대상 문자열
     * @returns {number}
     */
    function byteLength(value) {
        var str = value;
        // 문장 맨 뒤 개행문자가 붙는걸 제거한다.
        str = str.substring(0, str.length - 2);
        return (function (s, b, i, c) {
            for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 2 : c >> 7 ? 2 : 1) {}
            return b;
        })(str);
    }

    // 사용자 로그 초기값
    var defaultSubsData = {
        pIdx: -1,
        cnt: {
            pvCnt: 0,
            uvCnt: 0,
            // 'reporterCnt': 0,
            // 'articleCnt': 0,
            // 'packageCnt': 0,
            // 'jpodCnt': 0,
            measureCnt: 0
        }
    };

    var debug = (function (gState) {
        this.debug = {};

        if (gState) {
            for (var m in console) {
                if (typeof console[m] === 'function') {
                    this.debug[m] = console[m].bind(window.console);
                }
            }
        } else {
            for (var m in console) {
                if (typeof console[m] === 'function') {
                    this.debug[m] = function () {};
                }
            }
        }
        return this.debug;
    })(LOGGING);

    /**
     * 구독 대상 여부 체크(STEP 2)
     */
    var targetChecker = {
        isTarget: function (type, subsSet, subsData) {
            return targetChecker[type](subsSet, subsData);
        },

        // 로그인 여부에 따른 대상 선정
        login: function (subsSet) {
            // 쿠키값 뒤져서 로그인 여부 체크 로직 필요 일단은 비로그인 대상자에게 추천
            return subs.login ? subsSet.login.loginStatus === 'LOGIN' : subsSet.login.loginStatus === 'NOLOGIN';
        },

        // 로그인 사용자의 로그인 유형에 따른 대상 선정
        loginType: function (subsSet) {
            if (!subs.login) {
                return false;
            }
            // 쿠키값 뒤져서 회원가입종류과 본인 인증 여부 까지 확인
            var myInfo = utils.member.getInfo();
            var loginType = myInfo.type;
            var authentication = myInfo.ident === YES;
            if (subsSet.loginType[loginType]) {
                //로그인 유형 존재 여부 확인
                return subsSet.loginType[loginType] === YES ? authentication : true; //본인 인증 여부 체크 확인
            } else {
                return false;
            }
        },

        // 사용자의 디바이스 유형에 따른 대상 선정
        dev: function (subsSet) {
            if (typeof subsSet.dev === 'undefined') {
                return false;
            }
            var targetDevices = subsSet.dev.split(';');
            var isTarget = false;

            targetDevices.some(function (dev) {
                switch (dev) {
                    case 'P':
                        isTarget = utils.device.pc;
                        break;
                    case 'T':
                        isTarget = utils.device.tablet;
                        break;
                    case 'MW':
                        isTarget = (utils.device.mobile || utils.device.tablet) && !utils.device.joongangApp;
                        break;
                    case 'MA':
                        isTarget = (utils.device.mobile || utils.device.tablet) && utils.device.joongangApp;
                        break;
                }
                return isTarget;
            });

            return isTarget;
        },
        // referrer로 통한 대상 선정
        referrer: function (subsSet) {
            if (typeof subsSet.referrer === 'undefined') {
                return false;
            }
            var targetReferrers = subsSet.referrer.split(';');
            var isTarget = false;
            targetReferrers.some(function (ref) {
                if (urlInfo.referrer === ref) {
                    isTarget = true;
                }
                return isTarget;
            });

            return isTarget;
        },
        // 접속 브라우저 종류에 따른 대상 여부
        browser: function (subsSet) {
            if (typeof subsSet.browser === 'undefined') {
                return false;
            }
            var isTarget = false;
            var targetBrowsers = subsSet.browser.split(';');
            targetBrowsers.some(function (bro) {
                switch (bro) {
                    case 'ie':
                        isTarget = browser.IE;
                        break;
                    case 'chrome':
                        isTarget = browser.CHROME;
                        break;
                    case 'edge':
                        isTarget = browser.EDGE;
                        break;
                    case 'safari':
                        isTarget = browser.SAFARI;
                        break;
                    case 'andweb':
                        isTarget = browser.AW;
                        break;
                    case 'samsung':
                        isTarget = browser.SI;
                        break;
                    case 'etc':
                        isTarget = browser.ETC;
                        break;
                }
                return isTarget;
            });
            return isTarget;
        },
        // app push 설정 여부에 따른 분류
        push: function () {
            // 앱과 연동시 구현 필요
            //return true;
            // 2021.07.05 쿠키값을 읽어서 처리하라고 요청
            var isTarget = false;
            if (utils.cookie.has('isPush')) {
                var isPush = utils.cookie.get('isPush');
                if (isPush === 'true') {
                    isTarget = true;
                }
            }
            return isTarget;
        },
        // 상품별 푸시 설정 여부에 따른 분류
        pdPush: function (subsSet) {
            // 앱과 연동시 구현 필요
            if (typeof subsSet.pdPush === 'undefined') {
                return false;
            }
            var isTarget1 = true;
            if (subsSet.pdPush.onScbNos) {
                isTarget1 = false;
                var channels = subsSet.pdPush.onScbNos.split(';');
                channels.some(function (channel) {
                    var channelInfo = channel.split('|');
                    /**
                     * todo 푸시 설정 여부 앱 연동 필요
                     */
                    if (subs.mySubs[channelInfo[2] + channelInfo[0]] && subs.mySubs[channelInfo[2] + channelInfo[0]].PUSH_YN === YES) {
                        isTarget1 = true;
                    }
                    return isTarget1;
                });
            }

            var isTarget2 = true;
            if (subsSet.pdPush.offScbNos) {
                var channels = subsSet.pdPush.offScbNos.split(';');
                channels.every(function (channel) {
                    var channelInfo = channel.split('|');
                    /**
                     * todo 푸시 설정 여부 앱 연동 필요
                     */
                    if (subs.mySubs[channelInfo[2] + channelInfo[0]] && subs.mySubs[channelInfo[2] + channelInfo[0]].PUSH_YN === YES) {
                        isTarget2 = false;
                    }
                    return isTarget2;
                });
            }
            return isTarget1 && isTarget2;
        },
        letter: function (subsSet) {
            if (typeof subsSet.letter === 'undefined') {
                return false;
            }
            var isTarget1 = true;
            if (subsSet.letter.onScbNos) {
                isTarget1 = false;
                var channels = subsSet.letter.onScbNos.split(';');
                channels.some(function (channel) {
                    var channelInfo = channel.split('|');
                    if (subs.mySubs[channelInfo[2] + channelInfo[0]] && subs.mySubs[channelInfo[2] + channelInfo[0]].LETTER_RCV_YN === YES) {
                        isTarget1 = true;
                    }
                    return isTarget1;
                });
            }

            var isTarget2 = true;
            if (subsSet.letter.offScbNos) {
                var channels = subsSet.letter.offScbNos.split(';');
                channels.every(function (channel) {
                    var channelInfo = channel.split('|');
                    if (subs.mySubs[channelInfo[2] + channelInfo[0]] && subs.mySubs[channelInfo[2] + channelInfo[0]].LETTER_RCV_YN === YES) {
                        isTarget2 = false;
                    }
                    return isTarget2;
                });
            }
            return isTarget1 && isTarget2;
        },
        first: function (subsSet) {
            return subs.isFirst;
        },
        last: function (subsSet) {
            var term = diffRecentDay(subs.cDate, subs.lastVD);
            return term <= parseInt(subsSet.last);
        },
        uv: function (subsSet, subsData) {
            if (typeof subsSet.uv === 'undefined') {
                return false;
            }

            var uvDay = parseInt(subsSet.uv.uvDay);
            var uvTotal = 0;

            for (var i = 0; i < uvDay; i++) {
                var d = new Date();
                d.setDate(d.getDate() - i);
                if (subsData[dateFormat(d)]) {
                    uvTotal += subsData[dateFormat(d)].uvCnt;
                }
            }
            var isTarget = false;
            if (subsSet.uv.uvUpDownWard === 'DOWNWARD') {
                if (parseInt(subsSet.uv.uv) >= uvTotal) {
                    isTarget = true;
                }
            } else {
                if (parseInt(subsSet.uv.uv) <= uvTotal) {
                    isTarget = true;
                }
            }
            return isTarget;
        },
        pv: function (subsSet, subsData) {
            if (typeof subsSet.pv === 'undefined') {
                return false;
            }

            var pvDay = parseInt(subsSet.pv.pvDay);
            var pvTotal = 0;

            for (var i = 0; i < pvDay; i++) {
                var d = new Date();
                d.setDate(d.getDate() - i);
                if (subsData[dateFormat(d)]) {
                    pvTotal += subsData[dateFormat(d)]['cnt'].pvCnt;
                }
            }

            var isTarget = false;
            if (subsSet.pv.pvUpDownWard === 'DOWNWARD') {
                if (parseInt(subsSet.pv.pv) >= pvTotal) {
                    isTarget = true;
                }
            } else {
                if (parseInt(subsSet.pv.pv) <= pvTotal) {
                    isTarget = true;
                }
            }

            return isTarget;
        },
        campaign: function (subsSet, subsData) {
            if (typeof subsSet.campaign === 'undefined') {
                return false;
            }
            var isTarget = false;
            if (subsSet.campaign.campaignCds) {
                var campaignCds = subsSet.campaign.campaignCds.split(';');
                campaignCds.some(function (campaignCd) {
                    if (urlInfo.params['campaign'] === campaignCd) {
                        isTarget = true;
                    }
                    return isTarget;
                });
            }
            return isTarget;
        },
        // API 구현시 로직 추가 예정
        host: function () {
            return true;
        },
        utm: function (subsSet, subsData) {
            if (typeof subsSet.utm === 'undefined') {
                return false;
            }
            var isTarget = false;
            Object.keys(subsSet.utm).every(function (utmKey) {
                //false가 발생할때가지 최대 반복
                var utmValues = subsSet.utm[utmKey].split(';');
                utmValues.some(function (utmValue) {
                    // true가 발생할때까지 반복
                    isTarget = false;
                    if (urlInfo.params[utmKey] === utmValue) {
                        isTarget = true;
                    }
                    return isTarget;
                });
                return isTarget;
            });

            return isTarget;
        },
        scb: function (subsSet) {
            // 상품구독 여부
            if (typeof subsSet.scb === 'undefined') {
                return false;
            }
            var isTarget1 = true;
            if (subsSet.scb.onScbNos) {
                isTarget1 = false;
                var channels = subsSet.scb.onScbNos.split(';');
                channels.some(function (channel) {
                    // true가 발생할때까지 반복
                    var channelInfo = channel.split('|');
                    if (subs.mySubs[channelInfo[2] + channelInfo[0]]) {
                        isTarget1 = true;
                    }
                    return isTarget1;
                });
            }

            var isTarget2 = true;
            if (subsSet.scb.offScbNos) {
                var channels = subsSet.scb.offScbNos.split(';');
                channels.every(function (channel) {
                    // false가 발생할때까지 반복
                    var channelInfo = channel.split('|');
                    if (subs.mySubs[channelInfo[2] + channelInfo[0]]) {
                        isTarget2 = false;
                    }
                    return isTarget2;
                });
            }
            //return isTarget1 || isTarget2;
            return isTarget1 && isTarget2; // 20210705 수정요청사항
        },
        measure: function (subsSet, subsData) {
            if (typeof subsSet.measure === 'undefined') {
                return false;
            }

            var baseDay = parseInt(subsSet.measure.baseDay); // 계량기준
            var baseCount = parseInt(subsSet.measure.baseCount); // 계량기준
            // var reporterCnt = 0;
            // var articleCnt = 0;
            // var packageCnt = 0;
            // var jpodCnt = 0;
            var measureCnt = 0;

            for (var i = 0; i < baseDay; i++) {
                var d = new Date();
                d.setDate(d.getDate() - i);
                var logDate = dateFormat(d);
                if (subsData[logDate]) {
                    // if (subsData[logDate].reporterCnt) {
                    //     reporterCnt += subsData[logDate].reporterCnt;
                    // }
                    // if (subsData[logDate].articleCnt) {
                    //     articleCnt += subsData[logDate].articleCnt;
                    // }
                    // if (subsData[logDate].packageCnt) {
                    //     packageCnt += subsData[logDate].packageCnt;
                    // }
                    // if (subsData[logDate].jpodCnt) {
                    //     jpodCnt += subsData[logDate].jpodCnt;
                    // }
                    if (subsData[logDate]['cnt'].measureCnt) {
                        measureCnt += subsData[logDate]['cnt'].measureCnt;
                    }
                }
            }

            var isTarget = false;

            // if (baseCount <= reporterCnt
            //     || baseCount <= articleCnt
            //     || baseCount <= packageCnt
            //     || baseCount <= jpodCnt) {
            //     isTarget = true;
            // }
            if (baseCount <= measureCnt) {
                isTarget = true;
            }

            return isTarget;
        }
    };

    /**
     * 사용자 계량 처리
     */
    var targetCounter = {
        count: function (type, subsSet, subsData, revisit) {
            if (targetCounter[type]) {
                targetCounter[type](subsSet, subsData, revisit);
            }
        },

        uv: function (subsSet, subsData) {
            if (typeof subsSet.uv === 'undefined') {
                return;
            }
            var d = new Date();
            var uvDay = parseInt(subsSet.uv.uvDay);
            var uvTotal = 0;

            var isInTime = true;
            if (subsSet.uv['uvStartTime']) {
                if (parseInt(subsSet.uv['uvStartTime'].replace(/:/gi, '')) > parseInt(dateFormat(d, 'HHmmss'))) {
                    isInTime = false;
                }
            }
            if (subsSet.uv['uvEndTime']) {
                if (parseInt(subsSet.uv['uvEndTime'].replace(/:/gi, '')) < parseInt(dateFormat(d, 'HHmmss'))) {
                    isInTime = false;
                }
            }

            if (isInTime) {
                subsData[subs.cDate].uvCnt = 1;
            }
        },
        pv: function (subsSet, subsData) {
            if (typeof subsSet.pv === 'undefined') {
                return;
            }
            var d = new Date();
            var pvDay = parseInt(subsSet.pv.pvDay);
            var pvTotal = 0;

            var isInTime = true;
            if (subsSet.pv['pvStartTime']) {
                if (parseInt(subsSet.pv['pvStartTime'].replace(/:/gi, '')) > parseInt(dateFormat(d, 'HHmmss'))) {
                    isInTime = false;
                }
            }
            if (subsSet.pv['pvEndTime']) {
                if (parseInt(subsSet.pv['pvEndTime'].replace(/:/gi, '')) < parseInt(dateFormat(d, 'HHmmss'))) {
                    isInTime = false;
                }
            }

            if (isInTime) {
                subsData[subs.cDate]['cnt'].pvCnt++;
            }
        },
        measure: function (subsSet, subsData, revisit) {
            if (typeof subsSet.measure === 'undefined') {
                return;
            }
            var isTarget = false;
            var exceptSameChk = subsSet.measure['exceptSameChk'];
            var exceptRererers = subsSet.measure['exceptRererers'];
            var exceptTags = subsSet.measure['exceptTags'];
            var exceptUrls = subsSet.measure['exceptUrls'];

            if (exceptSameChk === YES && revisit) {
                return;
            }

            //Object.keys(subsSet.measure).forEach(function (measure) {
            Object.keys(subsSet.measure).some(function (measure) {
                var measureFactor = subsSet.measure[measure];
                //var cntAttr = '';
                var metaKey = '';
                var isTarget = false;

                var urlParts = URL_PATTERN.ARTICLE;
                if (measure === 'targetSame') {
                    urlParts = URL_PATTERN[subsSet.scbInfo.cType];
                } else if (measure === 'targetJpods') {
                    urlParts = URL_PATTERN.JPOD;
                } else if (measure === 'targetLetters') {
                    urlParts = URL_PATTERN.LETTER;
                }
                if (!subs.isTargetUrl(urlParts)) {
                    return false;
                }

                switch (measure) {
                    case 'targetSame':
                        if (measureFactor === YES) {
                            isTarget = targetCounter.subsInfoChk(subsSet.scbInfo);
                            if (isTarget) {
                                isTarget = targetCounter.articlePackage(subsSet.scbInfo, subs.distDt, subs.sections, subs.keywords);
                            }
                        }
                        break;
                    case 'targetArtpkgs':
                        Object.keys(measureFactor).forEach(function (key) {
                            isTarget = targetCounter.articlePackage(measureFactor[key], subs.distDt, subs.sections, subs.keywords);
                        });
                        break;
                    case 'targetReporters':
                        var measureFactors = measureFactor.split(/[\;\,\|]/);
                        if (subs.authorInfos && measureFactors) {
                            measureFactors.some(function (factor) {
                                // true가 발생할때까지 반복
                                var correctAuths = subs.authorInfos.filter(function (authorInfo) {
                                    return authorInfo.seq === parseInt(factor) || authorInfo.portalSeq === parseInt(factor);
                                });
                                if (correctAuths != null && correctAuths.length > 0) {
                                    isTarget = true;
                                }
                                return isTarget;
                            });
                        }
                        break;
                    case 'targetPkgs':
                        var measureFactors = measureFactor.split(/[\;\,\|]/);
                        if (subs.issues && measureFactors) {
                            measureFactors.some(function (factor) {
                                // true가 발생할때까지 반복
                                if (subs.issues.indexOf(factor) > -1) {
                                    isTarget = true;
                                }
                                return isTarget;
                            });
                        }
                        break;
                    case 'targetJpods':
                        var measureFactors = measureFactor.split(/[\;\,\|]/);
                        if (subs.jpods && measureFactors) {
                            measureFactors.some(function (factor) {
                                // true가 발생할때까지 반복
                                if (subs.jpods.indexOf(factor) > -1) {
                                    isTarget = true;
                                }
                                return isTarget;
                            });
                        }
                        break;
                    case 'targetLetters':
                        var measureFactors = measureFactor.split(/[\;\,\|]/);
                        if (subs.letters && measureFactors) {
                            measureFactors.some(function (factor) {
                                // true가 발생할때까지 반복
                                if (subs.letters.indexOf(factor) > -1) {
                                    isTarget = true;
                                }
                                return isTarget;
                            });
                        }
                        break;
                }

                if (isTarget) {
                    if (exceptRererers) {
                        var refs = exceptRererers.toLowerCase().split(';');
                        refs.every(function (ref) {
                            // 제외 referrer라면 false로 루프문에서 빠져나감
                            return (isTarget = urlInfo.referrer !== ref);
                        });
                    }
                    if (exceptTags) {
                        if (subs.keywords) {
                            var tags = exceptTags.toLowerCase().split(';');
                            tags.every(function (tag) {
                                // 제외 태그라면 false로 루프문에서 빠져나감
                                return (isTarget = subs.keywords.indexOf(tag) === -1);
                            });
                        }
                    }
                    if (exceptUrls) {
                        isTarget = false;
                        var currentUrl = urlInfo.url;
                        var urls = exceptUrls.trim().toLowerCase().split(';');
                        urls.every(function (url) {
                            // 일치하면 반복 중단
                            return (isTarget = currentUrl.indexOf(url) === -1);
                        });
                    }
                }

                if (isTarget) {
                    //subsData[subs.cDate][cntAttr]++;
                    subsData[subs.cDate]['cnt']['measureCnt']++;
                }

                return isTarget; // 1개라도 TRUE(증가분)이 나오면 종료한다.
            });
        },

        subsInfoChk: function (scbInfo) {
            var isTarget = false;
            switch (scbInfo.cType) {
                case 'ARTPKG':
                    //cntAttr = 'articleCnt';
                    isTarget = true;
                    break;
                case 'REPORTER':
                    subs.authorInfos.some(function (authorInfo) {
                        return (isTarget = authorInfo.seq === parseInt(scbInfo.cId) || authorInfo.portalSeq === parseInt(scbInfo.cId));
                    });
                    //cntAttr = 'reporterCnt';
                    break;
                case 'JPOD':
                    isTarget = subs.jpods && subs.jpods.indexOf(scbInfo.cId) > -1;
                    break;
                case 'LETTER':
                    isTarget = subs.letters && subs.letters.indexOf(scbInfo.cId) > -1;
                    break;
                case 'PKG':
                    isTarget = subs.issues && subs.issues.indexOf(scbInfo.cId) > -1;
                    //cntAttr = 'jpodCnt';
                    break;
                default:
                    isTarget = false;
            }
            //return {cntAttr: cntAttr, isTarget: isTarget};
            return isTarget;
        },

        articlePackage: function (pkgFactor, distDt, sections, keywords) {
            var isTarget = false;
            if (pkgFactor['pkgDiv'] === PKG_DIV.DIST) {
                // pkg_div D
                if (distDt) {
                    if (pkgFactor['distDt'] && pkgFactor['beforeAfter']) {
                        // 출고일 날짜 체크
                        if (pkgFactor['beforeAfter'].toUpperCase() === AFTER) {
                            // 출고일이 기준일 이후 0 보다 커야 함.
                            if (diffRecentDay(distDt, pkgFactor['distDt']) >= 0) {
                                isTarget = true;
                            }
                        } else {
                            // 출고일이 기준일 이전 => 0 보다 작아야 함.
                            if (diffRecentDay(distDt, pkgFactor['distDt']) <= 0) {
                                isTarget = true;
                            }
                        }
                    } else {
                        // 현재일과 출고일 차이
                        if (diffRecentDay(subs.cDate, distDt) > parseInt(pkgFactor['distPeriod'])) {
                            isTarget = true;
                        }
                    }
                }
            } else if (pkgFactor['pkgDiv'] === PKG_DIV.SECTION) {
                // pkg_div S
                if (sections && pkgFactor['catList']) {
                    var cats = pkgFactor['catList'].split(/[\;\,]/);
                    cats.some(function (category) {
                        // true가 발생할때까지 반복
                        if (sections.indexOf(parseInt(category)) > -1) {
                            isTarget = true;
                        }
                        return isTarget;
                    });
                }
                if (isTarget) {
                    /*
                    if (pkgFactor['scbYn']) {
                        if (pkgFactor['scbYn'] === YES) {
                            isTarget = true;
                        } else {
                            isTarget = false;
                        }
                    }*/

                    if (pkgFactor['sDate']) {
                        if (diffRecentDay(distDt, pkgFactor['sDate']) >= 0) {
                            isTarget = true;
                        } else {
                            isTarget = false;
                        }
                    }
                    if (isTarget) {
                        if (pkgFactor['eDate']) {
                            if (diffRecentDay(distDt, pkgFactor['eDate']) <= 0) {
                                isTarget = true;
                            } else {
                                isTarget = false;
                            }
                        }
                    }
                }
            } else {
                // pkg_div A
                isTarget = true;
            }
            // 제외 조건
            if (isTarget) {
                if (pkgFactor['exceptTagList'] || pkgFactor['exceptCatList']) {
                    var isExceptTagExist = false;
                    var isTagCheck = false;
                    if (pkgFactor['exceptTagList'] && keywords) {
                        isTagCheck = true;
                        var tagList = pkgFactor['exceptTagList'].split(/[\;\,]/);
                        tagList.some(function (tag) {
                            // true가 발생할때까지 반복
                            return (isExceptTagExist = keywords.indexOf(tag) > -1);
                        });
                    }
                    var isExceptCatExist = false;
                    var isCatCheck = false;
                    if (pkgFactor['exceptCatList'] && sections) {
                        isCatCheck = true;
                        var catList = pkgFactor['exceptCatList'].split(/[\;\,]/);
                        catList.some(function (cat) {
                            // true가 발생할때까지 반복
                            return (isExceptCatExist = sections.indexOf(parseInt(cat)) > -1);
                        });
                    }

                    if (isTagCheck && isCatCheck && pkgFactor['exceptAndOr']) {
                        //AND OR 조건 있는 경우
                        isTarget = pkgFactor['exceptAndOr'].toUpperCase() === AND ? !(isExceptTagExist && isExceptCatExist) : !(isExceptTagExist || isExceptCatExist);
                    } else {
                        isTarget = pkgFactor['exceptTagList'] && keywords ? !isExceptTagExist : !isExceptCatExist;
                    }
                }
            }
            return isTarget;
        }
    };

    /** 구독 제안 메시지 출력 **/
    var subsView = new (function () {
        this.goLoginPage = function (scbNo) {
            subs.setSuggestScbNo(scbNo);
            jaLogin();
        };

        this.suggest = function (msg) {
            $('body #subs_popup').hide();
            return new Promise(function (resolve, reject) {
                if (msg.scbInfo.mainYn === YES) {
                    return subs.suggestDialog(msg, $('#subscribe_only_tmpl')[0].outerHTML, resolve);
                } else {
                    if (typeof msg.offerMethod.design === 'undefined') {
                        return resolve(false);
                    }
                    $.ajax({
                        type: 'GET',
                        url: TEMPLATE_API + msg.offerMethod.design,
                        xhrFields: {
                            withCredentials: true
                        },
                        success: function (result) {
                            return subs.suggestDialog(msg, result, resolve);
                        },
                        error: function (e) {
                            debug.log('subscribe.my error');
                            return reject(false);
                        },
                        fail: function () {
                            debug.log('Check network connection.');
                            return reject(false);
                        },
                        done: function () {
                            debug.log('데이터 조회 완료');
                        }
                    });
                }
            });
        };

        this.suggestDialog = function (msg, result, resolve) {
            var html = result;
            var scbDesc = (msg.scbInfo['scbDesc'] = typeof msg.scbInfo['scbDesc'] !== 'undefined' ? msg.scbInfo['scbDesc'] : '구독 제안');
            var button1 = (msg.offerMethod['buttonValue1'] = msg.offerMethod['buttonValue1'] ? msg.offerMethod['buttonValue1'] : msg.offerMethodDiv === OFFER_METHOD.LOGIN ? '로그인' : '구독');
            var button2 = (msg.offerMethod['buttonValue2'] = msg.offerMethod['buttonValue2'] ? msg.offerMethod['buttonValue2'] : msg.offerMethodDiv === OFFER_METHOD.LOGIN ? '로그인' : '구독');
            debug.log('구독 제안 상품', msg);
            if (html != '') {
                if (html.indexOf('{{suggest}}') > -1) {
                    // 기존 버전
                    html = html
                        .replace(/{{scbDesc}}/g, scbDesc)
                        .replace(/{{scbName}}/g, msg.scbInfo['scbName'])
                        .replace(/{{suggest}}/g, msg.offerMethod['suggest'])
                        .replace(/{{button1}}/g, button1)
                        .replace(/{{button2}}/g, button2);
                    html = html.unescapeHtml();
                    subs.setTemplate(html);
                    if ($('#subs_popup').length === 0) {
                        $('body').append(html);
                    } else {
                        $('#subs_popup')[0].outerHTML = html;
                    }
                } else {
                    // jquery 템플릿을 이용한 버전
                    html = $(html).tmpl(msg);
                    subs.setTemplate(html[0].outerHTML);
                    $('body').append(html);
                }

                var $popup = $('body #subs_popup>div.MODAL');

                $popup.find('.suggest_msg').hide();
                var msgType = 'def';
                if (!utils.empty(msg.offerMethod['suggest'])) {
                    msgType = 'gen';
                } else {
                    if (msg.scbInfo.artView === YES) {
                        msgType = 'art';
                        subs.setArticleWall();
                    }
                }

                if (msg.scbInfo.artView !== YES) {
                    // 다음에 볼께요. 숨김
                    $popup.find('.btn_pass').hide();
                } else {
                    $('body, html').addClass('overflow_hidden');
                    setDisableBodyScroll();
                }

                $popup.find('.suggest_msg.' + msgType).show();

                $('#subs_popup .btn_subscribe,.btn_subs_ok').click(function (e) {
                    $popup.removeClass('show').addClass('hide');
                    return resolve(true);
                });

                $('#subs_popup .btn_pass').unbind('click');
                $('#subs_popup .btn_close').unbind('click');

                $('#subs_popup .btn_pass').click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return resolve(false);
                });

                $('#subs_popup .btn_close').click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return resolve(false);
                });

                $(window).off('beforeunload');
                $(window).on('beforeunload', function () {
                    return resolve(false);
                });
                setTimeout(function () {
                    //$('body #subs_popup>div.MODAL').removeClass('hide').addClass('show');
                    subs.openSubsLayer(this, { target: $('body #subs_popup>div.MODAL'), close: msg.scbInfo.artView !== YES, subsItem: msg });
                }, 100);
            } else {
                debug.error('구독 제안 안내 팝업 html 오류');
            }
        };

        /**
         * 구독 완료
         * @param scbNo
         */
        this.success = function (scbNo) {
            subs.isNotifying = true;
            var $popup = $('body #subs_popup');
            var firstlogin = utils.cookie.get(COOKIE_NAME.JA_MEM_FIRST_LOGIN_YN);
            if ($popup.length === 0) {
                var html = subs.getTemplate();
                if (!utils.empty(html)) {
                    $('body').append(html);
                    $popup = $('body #subs_popup');
                }
            }
            if ($popup.length === 0) {
                $('body, html').removeClass('overflow_hidden');
                setEnableBodyScroll();
                //window.alert("구독해주셔서 감사합니다.");
                //subs.isNotifying = false;
            } else {
                if (!firstlogin) {
                    $popup.find('.full_popup').removeClass('show');
                    subs.openSubsLayer(this, { target: $popup.find('.THANKS'), close: true });
                    setTimeout(function () {
                        $popup.find('.THANKS').fadeOut(800, function () {
                            $popup.find('.THANKS').removeClass('show').addClass('hide');
                            $popup.find('.THANKS').removeAttr('style');
                            $('body #subs_popup').hide();
                            $('body, html').removeClass('overflow_hidden');
                            setEnableBodyScroll();
                            //subs.isNotifying = false;
                        });
                    }, FADEOUT_DURATION);
                    $popup.find('.btn_subscribe,.btn_subs_ok,.btn_close').click(function (e) {
                        $('body #subs_popup').hide();
                        $('body, html').removeClass('overflow_hidden');
                        setEnableBodyScroll();
                        //subs.isNotifying = false;
                    });
                    subs.removeTemplate();
                }
            }
        };

        this.getTemplate = function () {
            return localStorage.getItem(SUGGEST_MSG_TEMPLATE);
        };

        this.setTemplate = function (html) {
            localStorage.setItem(SUGGEST_MSG_TEMPLATE, html);
        };

        this.removeTemplate = function () {
            localStorage.removeItem(SUGGEST_MSG_TEMPLATE);
        };

        this.closeMsg = function () {
            var $popup = $('body #subs_popup');
            $('body #subs_popup').hide();
            $('body, html').removeClass('overflow_hidden');
            $popup.find('.show').removeClass('hide');
            setEnableBodyScroll();
        };

        this.openSubsLayer = function (self, opt) {
            // 구독 제안 팝업 노출 이벤트 트리거
            if (typeof opt.subsItem !== 'undefined') {
                var event = jQuery.Event('subs_show');
                $(window).trigger(event, opt.subsItem);
            }
            if (typeof opt.close === 'undefined' || opt.close) {
                openLayer(self, opt.target);
                return;
            }

            var delay = opt.delay ? opt.delay : 1;

            var $obj = $(opt.target);
            setTimeout(function () {
                $obj.removeClass('hide');
                $obj.fadeIn(800, function () {
                    $obj.addClass('show');
                });
            }, delay);
            $obj.attr('tabindex', '0').focus();
        };

        this.setNewLetterAgree = function (subsId, subsName, groupName) {
            if ($('#letter_agree_popup').length > 0) {
                $('#letter_agree_popup .btn_ok,#letter_agree_popup .btn_cancel,#letter_agree_popup .btn_close').attr('data-evnt-ctg', 'subscription');
                $('#letter_agree_popup .btn_ok,#letter_agree_popup .btn_cancel,#letter_agree_popup .btn_close').attr('data-evnt-act', groupName + ' agreement');
                $('#letter_agree_popup .btn_ok').attr('data-evnt-lbl', '네');
                $('#letter_agree_popup .btn_cancel,#letter_agree_popup .btn_close').attr('data-evnt-lbl', '아니오');
                $('#letter_agree_popup .btn_ok,#letter_agree_popup .btn_cancel,#letter_agree_popup .btn_close').attr('data-prodid', subsId);
                $('#letter_agree_popup .btn_ok,#letter_agree_popup .btn_cancel,#letter_agree_popup .btn_close').attr('data-prodname', subsName);
            }
        };

        this.showNewsLetterAgree = function (success, fail, cancel) {
            var isShow = false;
            var $popup = $('#letter_agree_popup');
            if ($popup.length > 0) {
                $popup.find('.btn_ok').unbind('click');
                $popup.find('.btn_cancel').unbind('click');
                $popup.find('.btn_ok').click(function (e) {
                    subs.applyNewsLetter(function (result) {
                        closeLayer($popup.find('.btn_ok'), letter_agree_popup);
                        if (result['_SUCCESS'] && result['_SUCCESS']['_DATA']) {
                            success(result);
                        } else {
                            fail(result);
                        }
                    });
                });
                openLayer($popup.find('.btn_ok'), letter_agree_popup);
                $popup.find('.btn_close').unbind('click');
                $popup.find('.btn_cancel,.btn_close').click(function (e) {
                    sessionStorage.removeItem(SUGGEST_SCB_NO);
                    if (typeof cancel === 'function') {
                        cancel(false, null);
                    }
                });
                isShow = true;
            }
            return isShow;
        };

        /**
         * 제안 노출 가능 여부 판단
         * @param notify 노출 상태
         * @param state 강제 노출 옵션
         * @param visitPageIdx 재방문 페이지 여부
         * @returns {boolean}
         */
        this.canNotify = function (set, state, visitPageIdx) {
            if (visitPageIdx < set.pIdx && (set.notify === STATE.ARTVIEW || state === STATE.ARTVIEW)) {
                // 재방문 페이지인데, 기사열람과 반복조건에 걸려 구독 제안이 재노출 되는 조건
                return REVISIT_ALLOW;
            }
            if (state === STATE.INIT || state === STATE.ARTVIEW || state === STATE.REMIND) {
                return true;
            }
            return false;
        };

        /**
         * 제안 메시지 노출
         * @param scbNo 상품 번호
         * @returns {Promise<unknown>}
         */
        this.show = function (scbNo) {
            return new Promise(function (resolve, reject) {
                localforage.getItem(SUBS_SET_KEY).then(function (result) {
                    var subsTarget = subs.getSubsTarget(subs.cDate);
                    if (subsTarget[scbNo] && result[scbNo].offerMethod) {
                        /**
                         * 구독 제안을 노출시킨 방문 페이지 인덱스를 subsData에 추가
                         */
                        subs.setSuggestPageIdx(scbNo);
                        subs.suggest(result[scbNo])
                            .then(function (ok) {
                                if (ok) {
                                    return resolve(subsTarget);
                                } else {
                                    return reject(subsTarget);
                                }
                            })
                            .catch(function (err) {
                                return reject(subsTarget);
                            });
                    } else {
                        return reject(subsTarget);
                    }
                });
            });
        };
    })();

    var subsEventHandler = new (function () {
        /**
         * 페이지 이탈 감지 관리
         * @param
         * mySets 구독 대상 목록
         * @param leaveChk 이탈 감지 설정된 구독 상품 번호
         */
        this.handleLeaveChk = function (mySets, leaveChk) {
            var prevX = $(window).width();
            var prevY = $(window).height();
            $(document).on('mousemove', function (e) {
                var exposureScbNo = '';
                var x = $(window).width();
                var y = $(window).height();
                //if (prevX + prevY === x + y) {
                //    return;
                //}
                prevX = x;
                prevY = y;
                leaveChk.some(function (scbNo) {
                    if (mySets[scbNo].viewTimeCondi.leaveTValue) {
                        if (e.clientY < parseInt(mySets[scbNo].viewTimeCondi.leaveTValue)) {
                            exposureScbNo = scbNo;
                        }
                    }
                    if (mySets[scbNo].viewTimeCondi.leaveBValue) {
                        if (y - e.clientY < parseInt(mySets[scbNo].viewTimeCondi.leaveBValue)) {
                            exposureScbNo = scbNo;
                        }
                    }
                    if (mySets[scbNo].viewTimeCondi.leaveLValue) {
                        if (e.clientX < parseInt(mySets[scbNo].viewTimeCondi.leaveLValue)) {
                            exposureScbNo = scbNo;
                        }
                    }
                    if (mySets[scbNo].viewTimeCondi.leaveRValue) {
                        if (x - e.clientX < parseInt(mySets[scbNo].viewTimeCondi.leaveRValue)) {
                            exposureScbNo = scbNo;
                        }
                    }
                    return exposureScbNo !== '' && subs.mySets[exposureScbNo].notify !== STATE.REJECT;
                });
                if (exposureScbNo !== '') {
                    subs.procSuggestMethod(exposureScbNo);
                }
                prevX = e.clientX;
                prevY = e.clientY;
            });
        };

        /**
         * 절대적 스크롤 깊이를 기준으로 현재 페이지의 스크롤 위치에 따라 제안 노출
         * @param mySets 구독 제안 대상
         * @param scrollChk 스크롤 체크 대상 구독 상품 일련번호 목록
         */
        this.handleScrollChk = function (mySets, scrollChk, callback) {
            var mutex = false;
            $(window).scroll(function (e) {
                if (mutex) {
                    return;
                }
                mutex = true;
                var scrollInfo = subs.scrollIndicator();
                scrollChk.some(function (scbNo) {
                    var currentScbNo = '';
                    if (mySets[scbNo].viewTimeCondi.scrollUnit === SCROLL_UNIT.PERCENT) {
                        if (scrollInfo.PERCENT >= mySets[scbNo].viewTimeCondi.scrollValue) {
                            currentScbNo = scbNo;
                        }
                    } else {
                        //스크롤 설정값이 본문의 크기보다 작아야한다. 2022-05-16
                        if (scrollInfo.PIXEL >= parseInt(mySets[scbNo].viewTimeCondi.scrollValue) && subs.getArticleHeight() >= parseInt(mySets[scbNo].viewTimeCondi.scrollValue)) {
                            currentScbNo = scbNo;
                        }
                    }

                    if (currentScbNo !== '' && subs.mySets[currentScbNo].notify !== STATE.REJECT) {
                        if (callback) {
                            callback();
                        } else {
                            subs.procSuggestMethod(currentScbNo);
                        }
                        return true;
                    }
                });
                mutex = false;
            });
        };

        /**
         * 체류 시간 관리
         * @param mySets 구독 대상
         * @param loadingChk 체류시간 설정된 구독 상품 번호
         */
        this.handleLoadingChk = function (mySets, loadingChk) {
            var loadingTime = new Date();

            subs.loadingInterval = setInterval(function () {
                var exposureScbNo = '';
                loadingChk.some(function (scbNo) {
                    var ms = 1000;
                    if (mySets[scbNo].viewTimeCondi.loadingUnit === 'MIN') {
                        ms *= 60;
                    }
                    if (Math.ceil((new Date() - loadingTime) / ms) > parseInt(mySets[scbNo].viewTimeCondi.loadingValue)) {
                        exposureScbNo = scbNo;
                    }
                    return exposureScbNo !== '' && subs.mySets[exposureScbNo].notify !== STATE.REJECT;
                });
                if (exposureScbNo) {
                    subs.procSuggestMethod(exposureScbNo);
                }
            }, 1000);
        };

        /**
         *유휴시간 관리
         * @param mySets 구독 대상
         * @param idleChk 유휴시간 설정된 구독 상품 번호
         */
        this.handleIdleChk = function (mySets, idleChk) {
            var waitingTime = new Date();
            subs.idleInterval = setInterval(function () {
                var exposureScbNo = '';
                idleChk.some(function (scbNo) {
                    var ms = 1000;
                    if (mySets[scbNo].viewTimeCondi.idleUnit === 'MIN') {
                        ms *= 60;
                    }
                    if (Math.ceil((new Date().getTime() - waitingTime.getTime()) / ms) > parseInt(mySets[scbNo].viewTimeCondi.idleValue)) {
                        exposureScbNo = scbNo;
                    }
                    return exposureScbNo !== '' && subs.mySets[exposureScbNo].notify !== STATE.REJECT;
                });
                if (exposureScbNo) {
                    waitingTime = new Date();
                    subs.procSuggestMethod(exposureScbNo);
                }
            }, 1000);
            $(document).on('mousemove click scroll keydown', function (e) {
                waitingTime = new Date();
            });
        };

        /**
         * 반복 카운팅 및 반복 Turn 초기화
         * @param mySets
         * @param scbNo
         */
        this.setRepeatCnt = function (mySets, scbNo) {
            if (mySets[scbNo].viewTimeCondi.repeatChk === YES && typeof mySets[scbNo].repeatCnt === 'undefined') {
                // 처음 구독 제안이 된 상품의 반복 주기 설정
                mySets[scbNo].repeatCnt = 0;
                if (mySets[scbNo].viewTimeCondi.repeatFixs === YES) {
                    mySets[scbNo].repeatTurn = 0;
                }
            }
        };

        /**
         * 반복 조건 체크
         * 반복 조건은 첫번째 구매 제안 이후 처리 됨
         * @param mySets
         * @param repeatChk
         */
        this.handleRepeatChk = function (mySets, repeatChk) {
            var exposureScbNo = '';
            repeatChk.forEach(function (scbNo) {
                if (mySets[scbNo].notify === STATE.ACCEPT) {
                    // 이미 구독 신청 상태의 상품은 제외
                    return;
                }
                if (typeof mySets[scbNo].repeatCnt !== 'undefined') {
                    // 이미 구독 제안이 된 후 반복조건에 의해 처리된 상품
                    if (mySets[scbNo].isRepeatTarget) {
                        // 반복 카운트 증가
                        mySets[scbNo].repeatCnt++;

                        if (mySets[scbNo].viewTimeCondi.repeatFixs === YES) {
                            // 횟수 지정
                            var repeats = mySets[scbNo].viewTimeCondi.repeatNexts.split(';');
                            if (repeats && repeats.length > mySets[scbNo].repeatTurn) {
                                var repeat = parseInt(repeats[mySets[scbNo].repeatTurn]);
                                if (mySets[scbNo].repeatCnt >= repeat) {
                                    //mySets[scbNo].repeatCnt = 0;
                                    mySets[scbNo].repeatTurn++;
                                    exposureScbNo = scbNo;
                                }
                            }
                        } else {
                            if (mySets[scbNo].viewTimeCondi.repeatNexts) {
                                // 주기 반복
                                mySets[scbNo].viewTimeCondi.repeatNexts.split(';').forEach(function (repeat) {
                                    if (mySets[scbNo].repeatCnt % parseInt(repeat) === 0) {
                                        exposureScbNo = scbNo;
                                    }
                                });
                            }
                        }
                    }
                }
                return exposureScbNo !== ''; // 제안 가능 번호가 있고, 사용자가 이전에 제안 승락을 하지 않은 경우
            });
            // 반복 조건 구독 상품들을 이벤트에 따라 처리
            if (exposureScbNo && mySets[exposureScbNo].notify !== STATE.ACCEPT) {
                mySets[exposureScbNo].notify = STATE.REMIND;
                if (mySets[exposureScbNo].viewTimeYn === NO) {
                    //상시는 표시 처리 않함
                    subs.handleAlwaysChk(mySets, [exposureScbNo]);
                }
                if (mySets[exposureScbNo].viewTimeCondi.leaveChk === YES) {
                    if (subs.getArticleHeight() > 0) {
                        subs.handleLeaveChk(mySets, [exposureScbNo]);
                    } else {
                        //본문 스크롤 안될때
                        subs.handleAlwaysChk(mySets, [exposureScbNo]);
                    }
                }
                if (mySets[exposureScbNo].viewTimeCondi.scrollChk === YES) {
                    subs.handleScrollChk(mySets, [exposureScbNo]);
                }
                if (mySets[exposureScbNo].viewTimeCondi.loadingChk === YES) {
                    subs.handleLoadingChk(mySets, [exposureScbNo]);
                }
                if (mySets[exposureScbNo].viewTimeCondi.idleChk === YES) {
                    subs.handleIdleChk(mySets, [exposureScbNo]);
                }
            }
        };

        /**
         * 스크롤 퍼센트 & 위치
         * @returns {{PERCENT: number, PIXEL: number}}
         */
        this.scrollIndicator = function () {
            var scrollInfo = { PERCENT: 0, PIXEL: 0 };
            var articleHeight = subs.getArticleHeight();
            var articleStart = subs.getArticleStart();
            var articleTop = $('.article').offset() ? $('.article').offset().top : 0;
            var scrollHeightStart = articleTop - $('.issue_sticky').height() ? $('.issue_sticky').height() : 0 + $('#header').height();
            if (articleHeight > 0 && articleStart > 0 && $(window).scrollTop() > (articleTop - $('.issue_sticky').height() ? $('.issue_sticky').height() : 0 + $('#header').height())) {
                var percentage = (articleStart / articleHeight) * 100;
                scrollInfo.PERCENT = percentage > 100 ? 100 : percentage;
                scrollInfo.PIXEL = articleHeight > articleStart ? articleStart : articleHeight;
            }
            return scrollInfo;
        };

        /**
         * 본문 높이
         */
        this.getArticleHeight = function () {
            var articleTop = $('.article').offset() ? $('.article').offset().top : 0;
            var footerOffset = $('.article_footer').offset() ? $('.article_footer').offset().top : 0;
            return footerOffset > 0 ? footerOffset - articleTop - window.innerHeight : window.innerHeight - articleTop;
        };

        /**
         * 본문 시작 위치
         */
        this.getArticleStart = function () {
            var articleTop = $('.article').offset() ? $('.article').offset().top : 0;
            return $(window).scrollTop() - articleTop;
        };

        /**
         * 상시 표시 상품 노출 처리
         * @param mySets 구독 제안 상품 목록
         * @param alwaysChk 상시 표시로 체크된 상품 번호 목록
         */
        this.handleAlwaysChk = function (mySets, alwaysChk, callback) {
            var exposureScbNo = '';
            alwaysChk.some(function (scbNo) {
                if (mySets[scbNo].notify !== STATE.INIT && mySets[scbNo].notify !== STATE.ARTVIEW && mySets[scbNo].notify !== STATE.REMIND) {
                    // 이미 구독 신청 상태의 상품은 제외
                    return;
                }
                exposureScbNo = scbNo;
                return exposureScbNo !== ''; // 제안 가능 번호가 있고, 사용자가 이전에 제안 승락을 하지 않은 경우
            });
            if (exposureScbNo && mySets[exposureScbNo].notify !== STATE.ACCEPT) {
                if (callback) {
                    callback();
                } else {
                    subs.procSuggestMethod(exposureScbNo);
                }
            }
        };
    })();

    var MyInfoDTO = function () {
        return {
            id: null,
            tea: null,
            year: null,
            area: DEFAULT_AREA
        };
    };

    /**
     * 운세 제어
     */
    var unseController = new (function () {
        var loaded = false;
        var TEA_YEAR = {};
        var TEA_ARR = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양'];
        var TEA_IDX = eval(new Date().getFullYear() % TEA_ARR.length);
        var MIN_YEAR = 1932;
        var MAX_YEAR = 1999;

        this.unsePopupRender = function () {
            var render = function () {
                if ($('#layer_luck_input1').length === 0) {
                    $('#lucky_popup_area_tmpl')
                        .tmpl({
                            TEA_LIST: ['쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지']
                        })
                        .appendTo('body');

                    $('#layer_luck_input1 .radio_rect').click(function (e) {
                        e.preventDefault();
                        var tea = $(e.target).text();
                        $('#layer_luck_input2 .text_zodiac').text(tea);
                        subs.teaYearListRender(tea);
                        closeLayer($(e.target));
                        openLayer(this, layer_luck_input2);
                    });

                    $('#layer_luck_input3 .layer_footer button').click(function (e) {
                        subs.isNotifying = true;
                        if (typeof unseCallback === 'function') {
                            unseCallback();
                        } else {
                            closeLayer($(e.target));
                        }
                    });

                    $('#lucky_popup_area .btn_close').click(function (e) {
                        subs.isNotifying = false;
                    });
                }
            };

            if (!loaded) {
                return new Promise(function (resolve, reject) {
                    utils.ajax.get({
                        url: utils.config.apiPath + 'unse.latest',
                        success: function (result) {
                            if (result._DATA && result._DATA.length > 0) {
                                TEA_YEAR = result._DATA.reduce(function (all, cu) {
                                    all[cu.TEA] = all[cu.TEA] || [];
                                    all[cu.TEA].push(cu.B_YEAR);
                                    return all;
                                }, {});
                            }
                            render();
                            return resolve();
                        },
                        complete: function () {
                            loaded = true;
                        }
                    });
                });
            } else {
                render();
                return new Promise(function (resolve, reject) {
                    return resolve();
                });
            }
        };

        this.showTeaPopup = function (tea, target) {
            subs.isNotifying = true;
            $('#layer_luck_input1 input[type=radio]').prop('checked', false);
            var checkTea = tea != '' ? tea : !utils.empty(myInfoDTO.tea) ? myInfoDTO.tea : '';
            if (checkTea) {
                $('#layer_luck_input1 span:contains("' + tea + '")')
                    .siblings('input[type=radio]')
                    .prop('checked', true);
            }
            openLayer(target, layer_luck_input1);
        };

        this.teaYearListRender = function (tea) {
            var currentYear = new Date().getFullYear();
            var years = TEA_YEAR[tea].map(function (y) {
                var cur = currentYear.toString().slice(0, 2) + y.zf(2);
                while (Number(cur) >= currentYear) {
                    cur = (Number(currentYear.toString().slice(0, 2)) - 1).toString() + y.zf(2);
                }
                return cur;
            });

            /*
				21.10.20 띠 렌더링 로직 변경 (api로 받아온 데이터 사용)
				var userTeaIdx = TEA_ARR.indexOf(tea);
				var years = [];
				if (TEA_IDX > userTeaIdx) {
					currentYear = currentYear - (TEA_IDX - userTeaIdx);
				} else {
					currentYear = currentYear - TEA_ARR.length + (userTeaIdx - TEA_IDX);
				}
				while (currentYear >= MIN_YEAR) {
					if (MAX_YEAR > currentYear) {
						years.push(currentYear);
					}
					currentYear -= TEA_ARR.length;
				}
			*/

            $('#layer_luck_input2 .list_col1').empty();
            $('#layer_luck_input2_tmpl')
                .tmpl(
                    years.sort().map(function (year) {
                        var item = {};
                        item.year = year;
                        item.input = year.toString().substring(2);
                        return item;
                    })
                )
                .appendTo('#layer_luck_input2 .list_col1');

            $('#layer_luck_input2 input[type=radio]').prop('checked', false);
            if (myInfoDTO.year != '') {
                $('#layer_luck_input2 input[value="' + myInfoDTO.year + '"]').prop('checked', true);
            }

            $('#layer_luck_input2 .list_col1>li').click(function (e) {
                e.preventDefault();
                var year = $(e.currentTarget).find('input').val();
                var displayYear = $(e.currentTarget).data('year');
                myInfoDTO.id = mokaScbs.unseId;
                subs.unseSaveProcess(tea, year, displayYear);
            });
        };

        this.unseSaveProcess = function (tea, year, displayYear) {
            displayYear =
                displayYear ||
                (function () {
                    // displayYear가 없을 경우 year를 사용해서 생성
                    var nowYear = new Date().getFullYear();
                    var cur = nowYear.toString().slice(0, 2) + year.zf(2);
                    while (Number(cur) >= nowYear) {
                        cur = (Number(nowYear.toString().slice(0, 2)) - 1).toString() + year.zf(2);
                    }
                    return cur;
                })();

            subs.saveUnse(tea, year)
                .then(function (result) {
                    if (result['_ERR_CODE'] && result['_ERR_CODE']['_DATA'] === SUBS_ERROR_CODE.AGREE) {
                        var letterSuccess = function (result) {
                            myInfoDTO.tea = null;
                            myInfoDTO.year = null;
                            closeLayer($('#letter_agree_popup .btn_ok'), letter_agree_popup);
                            if (result['_SUCCESS'] && result['_SUCCESS']['_DATA']) {
                                subs.unseSaveProcess(tea, year, displayYear);
                            } else {
                                messageUtil.alert({ message: result._MESSAGE._DATA });
                            }
                        };
                        var letterFail = function (result) {
                            messageUtil.alert({ message: result._MESSAGE._DATA });
                        };
                        var letterCancel = function (result) {
                            myInfoDTO.tea = null;
                            myInfoDTO.year = null;
                            sessionStorage.removeItem(SUGGEST_SCB_NO);
                        };
                        closeLayer($('#layer_luck_input2'));
                        if (!subs.showNewsLetterAgree(letterSuccess, letterFail, letterCancel)) {
                            subs.applyNewsLetter(function () {
                                myInfoDTO.tea = null;
                                myInfoDTO.year = null;
                                subs.unseSaveProcess(tea, year, displayYear);
                            });
                        }
                    } else {
                        window.mySubs.push({ SCB_NO: myInfoDTO.id, SCB_TARGET_NAME: '오늘의 운세' });
                        if (setActiveMySubs) {
                            setActiveMySubs();
                        }
                        $('#layer_luck_input3 .my_year').text(displayYear + '년생');
                        $('#layer_luck_input3 .my_animal').text(tea + '띠');
                        if (result['_MESSAGE'] != null && result['_MESSAGE']['_DATA'] !== null) {
                            $('#layer_luck_input3 .description').text(result['_MESSAGE']['_DATA']);
                        }
                        closeLayer(layer_luck_input2);
                        openLayer(this, layer_luck_input3);
                    }
                })
                .catch(function () {
                    messageUtil.toast({
                        message: '운세 구독 중 오류가 발생했습니다.'
                    });
                    //openLayer(this, layer_luck_input3);
                });
        };

        /**
         * 운세 설정 정보 저장
         * - (수정) 21.10.19 내 구독 정보에 운세ID가 있으면 unse.update를 호출
         * @param tea 띠
         * @param year 생년월일(뒤 2자리)
         * @returns {Promise<unknown>}
         */
        this.saveUnse = function (tea, year) {
            var api = 'unse.insert';

            if (myInfoDTO.tea != null && myInfoDTO.year != null) {
                api = 'unse.update';
            }
            // if (mySubs) {
            // 	var filtered = mySubs.filter(function (item) {
            // 		return item.SCB_NO == mokaScbs.unseId;
            // 	});
            // 	if (filtered.length > 0) {
            // 		api = 'unse.update';
            // 	}
            // }

            myInfoDTO.tea = tea;
            myInfoDTO.year = year;
            var params = Object.assign(subs.getSubscribeParams(myInfoDTO.id), myInfoDTO);
            // var params = Object.assign(subs.getSubscribeParams(), myInfoDTO, { id: myInfoDTO.id || mokaScbs.unseId });

            return new Promise(function (resolve, reject) {
                utils.ajax.post({
                    url: utils.config.apiPath + api,
                    data: params,
                    withCredentials: true,
                    success: function (result) {
                        return resolve(result);
                    }
                });
            });
        };

        /**
         * 운세 구독 취소
         * @returns {Promise<unknown>}
         */
        this.cancelUnse = function (scbno) {
            var api = 'unse.delete';
            return subs.sendSubscribe(api, scbno);
        };

        /**
         * 운세 정보 조회
         * @returns {Promise<unknown>}
         */
        this.myLuck = function () {
            return new Promise(function (resolve, reject) {
                utils.ajax.get({
                    url: utils.config.apiPath + 'unse.my',
                    withCredentials: true,
                    success: function (result) {
                        return resolve(result);
                    }
                });
            });
        };
    })();

    var subsService = new (function () {
        this.subscribeMyUrl = API_PATH + 'subscribe.my?scope=A';
        this.myNewsFlash = API_PATH + 'subscribe.sokbo.my';

        /**
         * 구독 등록 / 취소
         * @param {string} api api
         * @param {string} subsId subsId
         * @param {object} callback
         */
        this.sendSubscribe = function (api, subsId) {
            return new Promise(function (resolve, reject) {
                utils.ajax.post({
                    url: utils.config.apiPath + api,
                    data: subs.getSubscribeParams(subsId),
                    withCredentials: true,
                    success: function (result) {
                        return resolve(result);
                    },
                    error: function (e) {
                        return reject(e);
                    },
                    fail: function () {
                        return reject(e);
                    }
                });
            });
        };

        /**
         * 뉴스레터 수신 동의
         * @param {object} callback
         */
        this.applyNewsLetter = function (callback) {
            utils.ajax.post({
                url: utils.config.apiPath + 'subscribe.yes.update',
                withCredentials: true,
                success: function (result) {
                    if (typeof callback !== 'undefined') {
                        callback(result);
                    }
                }
            });
        };

        /** 구독 신청 등록 처리 **/
        this.insertScb = function (scbNo, success, fail) {
            subs.subscribeProcess(scbNo, true)
                .then(function (result) {
                    success(true, result);
                })
                .catch(function (result) {
                    if (result['_ERR_CODE'] && result['_ERR_CODE']['_DATA'] === SUBS_ERROR_CODE.AGREE) {
                        subs.showNewsLetterAgree(
                            function (result) {
                                if (result['_SUCCESS'] && result['_SUCCESS']['_DATA']) {
                                    subs.insertScb(scbNo, success, fail);
                                } else {
                                    messageUtil.alert({ message: result._MESSAGE._DATA });
                                }
                            },
                            function (result) {
                                messageUtil.alert({ message: result._MESSAGE._DATA });
                            },
                            function () {
                                sessionStorage.removeItem(SUGGEST_SCB_NO);
                                success(false, null);
                            }
                        );
                    } else {
                        var errorMsg = '';
                        if (result['_MESSAGE']) {
                            errorMsg = result['_MESSAGE']['_DATA'];
                        } else {
                            errorMsg = result;
                        }
                        fail(errorMsg);
                    }
                });
        };

        this.getSubscribeParams = function (scbNo) {
            return {
                id: scbNo,
                memgroup: dataLayer[0].userData.memberGroup,
                cert: utils.member.getInfo().ident,
                url: dataLayer[0].pageData.pageUrl,
                referrer: dataLayer[0].pageData.referrer,
                dev: dataLayer[0].pageData.pageType,
                platform: browser.platform(),
                browser: browser.code(),
                os: browser.os()
            };
        };

        // 속보
        this.getMyNewsFlash = function () {
            return new Promise(function (resolve, reject) {
                if (utils.app.pushToken() !== '') {
                    var opt = {
                        type: 'GET',
                        url: subs.myNewsFlash + '?token=' + utils.app.pushToken(),
                        withCredentials: true,
                        success: function (result) {
                            debug.log('사용자 속보 사용 여부 조회');
                            // 사용자 로그 및 상품정보 업데이트
                            if (typeof result === 'string') {
                                // 가끔씩 문자열로 내려옴
                                result = JSON.parse(result);
                            }
                            return resolve(result['_DATA'].USED_YN);
                        },
                        error: function (e) {
                            debug.log('subscribe.sokbo.my error');
                            return reject(e);
                        },
                        fail: function (e) {
                            debug.log('Check network connection.');
                            return reject(e);
                        },
                        done: function () {
                            debug.log('데이터 조회 완료');
                        }
                    };
                    utils.ajax.get(opt);
                } else {
                    return resolve('N');
                }
            });
        };

        this.getMySubs = function (params) {
            return new Promise(function (resolve, reject) {
                var opt = {
                    type: 'GET',
                    url: subs.subscribeMyUrl,
                    withCredentials: true,
                    success: function (result) {
                        debug.log('사용자 구독 상품 목록 조회');
                        // 사용자 로그 및 상품정보 업데이트
                        if (typeof result === 'string') {
                            // 가끔씩 문자열로 내려옴
                            result = JSON.parse(result);
                        }
                        return resolve(result);
                    },
                    error: function (e) {
                        debug.log('subscribe.my error');
                        return reject(e);
                    },
                    fail: function (e) {
                        debug.log('Check network connection.');
                        return reject(e);
                    },
                    done: function () {
                        debug.log('데이터 조회 완료');
                    }
                };
                if (params) {
                    opt.data = params;
                }

                utils.ajax.get(opt);
            });
        };
    })();

    var subsStore = new (function () {
        this.getMySubsInfo = function (scbNo) {
            if (window.mySubs != null) {
                var subsInfo = null;
                window.mySubs.some(function (item) {
                    // 20210825 내 구독 정보를 검색 할 시 구독 아이디를 구독 아이디 뿐 아니라 대표 구독 아이디에서도 확인 - thkim
                    //var same = item.SCB_NO === scbNo
                    var same = item.SCB_NO === scbNo || item.MAIN_SCB_NO === scbNo;
                    if (same) {
                        subsInfo = item;
                    }
                    return item.SCB_NO === scbNo;
                });
                return subsInfo;
            }
            return null;
        };

        /**
         * 구독 제안 거절 정보 초기화
         */
        this.clearRejectSuggest = function () {
            localStorage.removeItem(SUBS_REJECT);
        };

        /**
         * 구독 제한 대상 목록 초기화
         */
        this.clearSubsTarget = function () {
            localStorage.removeItem(SUBS_TARGET);
        };

        /**
         * 구독 제안 노출 페이지 인덱스 정보 초기화
         */
        this.clearSuggestPageIndex = function () {
            var subsData = this.getSubsData();
            Object.keys(subsData).forEach(function (scbNo) {
                if (subsData[scbNo] && subsData[scbNo][this.cDate]) {
                    subsData[scbNo][this.cDate].pIdx = -1;
                }
            });
            localStorage.setItem(SUBS_DATA_KEY, JSON.stringify(subsData));
        };

        /**
         * 서버에서 내려온 데이터를 이용하여 mySubs에 등록한다.
         * @param result 구독 신청시 서버에서 내려온 결과
         */
        this.addMySubsData = function (result) {
            if (result) {
                var resultInfo = result['_INFO'];
                if (resultInfo) {
                    var addMySubs = resultInfo['_DATA'];
                    if (Array.isArray(addMySubs)) {
                        addMySubs.forEach(function (subsInfo) {
                            window.mySubs.push(subsInfo);
                            subs.mySubs[subsInfo.CHANNEL_TYPE + subsInfo.CHANNEL_ID] = subsInfo;
                        });
                    }
                }
            }
        };

        this.clearNotifyAttr = function (channelType, channelId) {
            var subsTarget = subs.getSubsTarget(subs.cDate);
            if (typeof subsTarget === 'object') {
                Object.keys(subsTarget).forEach(function (key) {
                    var cId = subsTarget[key].scbInfo.cId;
                    var cType = subsTarget[key].scbInfo.cType;
                    if (cType === channelType && cId == channelId) {
                        subsTarget[key].notify = STATE.INIT;
                    }
                });
                subs.setSubsTarget(subsTarget);
            }
        };

        /**
         * 구독 상품 정보 저장
         * @param subsSet 구독 상품
         * @returns {Promise<unknown>}
         */
        this.setSubsSet = function (subsSet) {
            // 모두 처리 후 전체 데이터 한번에 갱신
            debug.log('상품 정보 저장 시작');
            var count = Object.keys(subsSet).length;
            var bytes = (byteLength(JSON.stringify(subsSet)) / (1000 * 1000)).toFixed(2) + 'MB';
            return new Promise(function (resolve, reject) {
                localforage.setItem(SUBS_SET_KEY, subsSet).then(function (result) {
                    debug.log('상품 정보 저장 완료 <span style="color: #ff0000">' + count + '건,' + bytes + '< /span>');
                    return resolve(subsSet);
                });
            });
        };

        /**
         * 구독 신청 진행중인 구독 설계 일련번호
         * @param scbNo
         */
        this.setSuggestScbNo = function (scbNo) {
            sessionStorage.setItem(SUGGEST_SCB_NO, scbNo);
        };

        /**
         * 로컬 스토리지에 사용자 계량 정보저장
         * @param subsData JSON 형태의 사용자 로그
         */
        this.setSubsData = function (subsData) {
            localStorage.setItem(SUBS_DATA_KEY, JSON.stringify(subsData));
        };

        /**
         * 로컬 스토리지에 사용자 계량 정보저장
         * @param subsData JSON 형태의 사용자 로그
         */
        this.setSuggestPageIdx = function (scbNo) {
            var subsData = this.getSubsData();
            if (subsData[scbNo] && subsData[scbNo][this.cDate] && (typeof subsData[scbNo][this.cDate].pIdx === 'undefined' || subsData[scbNo][this.cDate].pIdx === -1)) {
                subsData[scbNo][this.cDate].pIdx = this.visitPageIdx;
                localStorage.setItem(SUBS_DATA_KEY, JSON.stringify(subsData));
            }
        };

        /**
         * 로컬 스토리지에 사용자 방문 url 목록 설정
         * @param subsData JSON 형태의 사용자 로그
         */
        this.setVisitUrl = function (visitUrl) {
            localStorage.setItem(VISIT_URLS, JSON.stringify(visitUrl));
        };

        /**
         * 사용자 구독상품 키
         * @param subsSetData 구독설계 정보
         * @returns {*}
         */
        this.getProductKey = function (subsSetData) {
            return subsSetData.scbInfo['cType'] + subsSetData.scbInfo['cId'];
        };

        /**
         * 로컬 스토리지에 사용자 방문url저장
         * @param subsData JSON 형태의 사용자 로그
         */
        this.addVisitUrl = function (url) {
            var urls = this.getVisitUrl();
            var d = today();

            if (typeof urls[d] === 'undefined') {
                urls[d] = [];
            }
            Object.keys(urls).forEach(function (key) {
                if (key === d) {
                    subs.visitPageIdx = urls[key].indexOf(url);
                    if (subs.visitPageIdx === -1) {
                        urls[key].push(url);
                        subs.visitPageIdx = urls[key].indexOf(url);
                    } else {
                        subs.revisit = true;
                    }
                } else {
                    // 오늘 날짜의 조회 url이 아닌건 제거
                    delete urls[key];
                }
            });
            this.setVisitUrl(urls);
        };

        /**
         * 새로운 사용자 계량 정보 생성
         * @param modDt 생성일
         * @returns {{}}
         */
        this.createNewUserSubsData = function (modDt) {
            var cDate = dateFormat(new Date(), 'yyyyMMdd');
            var result = {};
            result['modDt'] = modDt;
            result = {};
            result[cDate] = defaultSubsData;
            return result;
        };

        /**
         * 구독 제안 대상 목록 저장
         * @param target JSON 형태의 사용자 로그
         */
        this.setSubsTarget = function (target) {
            var subsTarget = {};
            var targets = this.getSubsTarget();
            var d = today();
            Object.keys(targets).forEach(function (key) {
                if (key !== d) {
                    // 이전 날짜 대상 정보는 삭제
                    delete targets[key];
                }
            });
            subsTarget[d] = target;
            localStorage.setItem(SUBS_TARGET, JSON.stringify(subsTarget));
        };

        /**
         * 거절 정보 설정
         * @param subsReject 거정 정보
         */
        this.setRejectSuggest = function (subsReject) {
            localStorage.setItem(SUBS_REJECT, JSON.stringify(subsReject));
        };

        /**
         * 거절 정보 추가
         * @param scbNo
         */
        this.addRejectSuggest = function (scbNo) {
            if (localStorage.getItem(SUBS_REJECT) === null) {
                localStorage.setItem(SUBS_REJECT, '{}');
            }

            var subsReject = this.getRejectSuggest();
            subsReject[scbNo] = { rd: this.cDate };
            this.setRejectSuggest(subsReject);
        };

        /**
         * 구독 일련번호로 사용자 로그 정보 추가
         * @param scbNo
         */
        this.addSubsDataByScbNo = function (scbNo) {
            var subsData = this.getSubsData();
            var cDate = dateFormat(new Date(), 'yyyyMMdd');
            if (!subsData[scbNo]) {
                subsData[scbNo] = {};
            }

            if (!subsData[scbNo][cDate]) {
                subsData[scbNo][cDate] = defaultSubsData;
            }
            localStorage.setItem(SUBS_DATA_KEY, JSON.stringify(subsData));
        };

        /**
         * 로컬 스토리지에 사용자 방문 url 목록 추가
         * 문자열을 json 형태로 반환
         */
        this.getVisitUrl = function () {
            if (localStorage.getItem(VISIT_URLS) === null) {
                localStorage.setItem(VISIT_URLS, '{"' + today() + '":[]}');
            }
            return JSON.parse(localStorage.getItem(VISIT_URLS));
        };

        /**
         * 사용자 거절 정보 조회
         * @returns {any}
         */
        this.getRejectSuggest = function () {
            if (localStorage.getItem(SUBS_REJECT) === null) {
                localStorage.setItem(SUBS_REJECT, '{}');
            }
            return JSON.parse(localStorage.getItem(SUBS_REJECT));
        };

        /**
         * 로컬 스토리지의 사용자 정보조회
         * 문자열을 json 형태로 반환
         */
        this.getSubsData = function () {
            if (localStorage.getItem(SUBS_DATA_KEY) === null) {
                localStorage.setItem(SUBS_DATA_KEY, '{}');
            }
            return JSON.parse(localStorage.getItem(SUBS_DATA_KEY));
        };

        /**
         * 구독 제한 대상 목록
         * 문자열을 json 형태로 반환
         */
        this.getSubsTarget = function (key) {
            if (localStorage.getItem(SUBS_TARGET) === null) {
                localStorage.setItem(SUBS_TARGET, '{"' + today() + '":[]}');
            }
            try {
                var subsTarget = JSON.parse(localStorage.getItem(SUBS_TARGET));
                if (!subsTarget[this.cDate]) {
                    subsTarget[this.cDate] = {};
                    localStorage.setItem(SUBS_TARGET, JSON.stringify(subsTarget));
                }
                return key ? subsTarget[key] : subsTarget;
            } catch (e) {
                // 데이터 형식 오류로 초기화 후 재실행
                localStorage.removeItem(SUBS_TARGET);
                return subs.getSubsTarget();
            }
        };

        /**
         * 마지막 방문일
         * @returns {String}
         */
        this.getLastVD = function () {
            return localStorage.getItem(LAST_VD_KEY);
        };

        /**
         * 최근 방문일
         * @returns {String}
         */
        this.getRecentVD = function () {
            return localStorage.getItem(RECENT_VD_KEY);
        };

        /**
         * 구독 상품 최근 변경 기준일
         * @returns {String}
         */
        this.getRecentUD = function () {
            return localStorage.getItem(RECENT_UD_KEY);
        };

        /**
         * 구독 상품 조회
         * @returns {Promise<unknown>}
         */
        this.getSubsSet = function () {
            return new Promise(function (resolve, reject) {
                localforage.getItem(SUBS_SET_KEY).then(function (result) {
                    return resolve(result);
                });
            });
        };

        /**
         * 구독 제안 로그 조회
         * @returns {String}
         */
        this.getSuggestLog = function () {
            return new Promise(function (resolve, reject) {
                localforage.getItem(SUGGEST_LOG_KEY).then(function (result) {
                    return resolve(result);
                });
            });
        };

        /**
         * 구독 신청 중인 구독 설계 번호
         * @returns {String}
         */
        this.getSuggestScbNo = function () {
            return sessionStorage.getItem(SUGGEST_SCB_NO);
        };

        this.setArticleWall = function () {
            if (typeof dataLayer !== 'undefined') {
                dataLayer[0].pageData.articleWall = 1;
            }
        };

        this.setContentPermission = function (access) {
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({ contentPermission: access });
            }
        };

        this.setEventCtg = function (eventCtg) {
            subs.eventCtg = eventCtg;
        };
    })();

    var subsController = new (function () {
        this.isNotifying = false;
        this.loadingInterval = null;
        this.idleInterval = null;
        this.isFirst = false;
        this.mySets = {};
        this.lastVD = null;
        this.mySubs = [];
        this.sections = null;
        this.keywords = null;
        this.jpods = null;
        this.letters = null;
        this.issues = null;
        this.distDt = '';
        this.authorInfos = null;
        this.cDate = dateFormat(new Date(), 'yyyyMMdd');
        this.visitPageIdx = -1; // 방문했던 페이지 여부
        this.revisit = false;
        this.recentUD = '';
        this.localRecentUD = '';
        this.recentVD = '';
        this.login = utils.member.isMem();
        this.exposureCnt = 0;
        this.artViewCnt = 0;
        this.eventCtg = 'subscription';

        // 시작
        this.start = function () {
            var subsList = null;
            return new Promise(function (resolve, reject) {
                debug.log('user subscribe basis data load start');
                subs.procSuggestComplete()
                    .then(function () {
                        return subs.init().then(function (result) {
                            subsList = result;
                            if (subsList && subsList._DATA) {
                                window.mySubs = subsList._DATA;
                                setActiveMySubs();
                            }
                            var event = jQuery.Event('subs_init');
                            $(window).trigger(event, subsList);
                        });
                    })
                    .then(function () {
                        return subs.procStart();
                    })
                    .then(function (subsSet) {
                        // 로드된 페이지를 기준으로 구독 정보 설정
                        return subs.procTarget(subsSet).then(
                            function (mySets) {
                                // 구독 대상 목록을 subs 객체에 assign, 구독 제안 phase를 위해...
                                subs.mySets = mySets;
                                debug.log('user subscribe basis data load end');
                                return subsSet;
                            },
                            function () {
                                debug.log('user subscribe basis data load error!!');
                                return subsSet;
                            }
                        );
                    })
                    .then(function (subsSet) {
                        debug.log('user subscribe suggest phase start');
                        subs.procSuggest(subs.mySets, subsSet);
                        debug.log('user subscribe suggest phase end');
                    })
                    .catch(function (e) {
                        debug.log('user subscribe basis data load error!!', e);
                    })
                    .finally(function () {
                        // 맨 마지막에 로컬스크로지에 구독제안 대상 정보 기재
                        subs.setSubsTarget(subs.mySets);
                        subs.procRepProduct();
                        return resolve(subsList);
                    });
            });
        };

        /**
         * 구독 정보 처리 시작
         * @param reset
         * @returns {Promise<unknown>}
         */
        this.procStart = function (reset) {
            return new Promise(function (resolve, reject) {
                localforage.getItem(SUBS_SET_KEY).then(function (subsSet) {
                    var subsData = subs.getSubsData();
                    if (diffRecentDate(subs.recentUD, subs.localRecentUD) > 0 || !subsSet || subsSet.length === 0) {
                        // 구독상품 정보 갱신 필요
                        debug.log('구매 대상 수신 시작');
                        $.ajax({
                            type: 'GET',
                            url: API_PATH + 'scb-target',
                            success: function (result) {
                                debug.log('구매 대상 수신 완료');
                                // 사용자 로그 및 상품정보 업데이트
                                if (typeof result === 'string') {
                                    // 가끔씩 문자열로 내려옴
                                    result = JSON.parse(result);
                                }
                                var resultMap = {};
                                result.forEach(function (item, idx) {
                                    resultMap[item.scbNo] = item;
                                    resultMap[item.scbNo].order = idx;
                                });

                                subs.procImportSubsSet(resultMap, subsData, subs.recentUD).then(function (subsSetData) {
                                    return resolve(subsSetData);
                                });
                            },
                            fail: function () {
                                debug.log('Check network connection.');
                                return reject();
                            },
                            done: function () {
                                debug.log('데이터 조회 완료');
                            }
                        });
                    } else {
                        if (subsSet) {
                            Object.keys(subsSet).forEach(function (key) {
                                var usk = subs.getProductKey(subsSet[key]);
                                if (!subsData[key]) {
                                    // 계량 정보 없는 경우
                                    if (!subs.mySubs[usk]) {
                                        subsData[key] = subs.createNewUserSubsData(subsSet[key].modDt);
                                    }
                                } else {
                                    if (subs.mySubs[usk]) {
                                        // 구독중인 상품인 경우
                                        delete subsData[key];
                                    } else {
                                        if (!subsData[key][subs.cDate]) {
                                            // 오늘 날짜 없는 경우
                                            subsData[key][subs.cDate] = defaultSubsData;
                                        }
                                    }
                                }
                            });
                        }
                        subs.setSubsData(subsData);
                        return resolve(subsSet);
                    }
                });
            });
        };

        this.init = function (reset) {
            this.isFirst = false;
            this.sections = [];
            this.keywords = [];
            this.jpods = [];
            this.letters = [];
            this.issues = [];
            this.authorInfos = [];

            if (reset) {
                localforage.removeItem(SUGGEST_LOG_KEY);
                localStorage.removeItem(RECENT_UD_KEY);
                localStorage.removeItem(SUBS_TARGET);
                localStorage.removeItem(SUBS_REJECT);
                localStorage.removeItem(VISIT_URLS);
            }
            this.recentUD = '';
            this.localRecentUD = localStorage.getItem(RECENT_UD_KEY);
            this.recentVD = localStorage.getItem(RECENT_VD_KEY);

            if (!this.localRecentUD) {
                //구독 상품 최근 변경 기준일 meta key
                this.isFirst = true;
            }

            if (this.cDate !== this.recentVD) {
                localStorage.setItem(LAST_VD_KEY, this.recentVD ? this.recentVD : this.cDate);
                localStorage.setItem(RECENT_VD_KEY, this.cDate);
            }

            this.lastVD = localStorage.getItem(LAST_VD_KEY);
            this.mySets = this.getSubsTarget(this.cDate);

            if (typeof dataLayer !== 'undefined' && typeof mokaScbs !== 'undefined') {
                this.recentUD = mokaScbs['recentUD'];
                this.jpods = dataLayer ? mokaScbs['jpods'].split(/[\,\;]/) : null;
                this.letters = dataLayer && mokaScbs['letters'] ? mokaScbs['letters'].split(/[\,\;]/) : null;
                this.issues = dataLayer ? mokaScbs['packages'].split(/[\,\;]/) : null;

                this.sections = dataLayer ? mokaScbs['codes'] : null;
                this.keywords = dataLayer ? dataLayer[0]['contentData'].contentTags.split(', ') : null;
                var distDt = dataLayer ? dataLayer[0]['contentData'].serviceDate : null;
                if (distDt.length > 8) {
                    distDt = distDt.replace(/-/g, '').substring(0, 8);
                }
                this.distDt = distDt;
                var authorInfos = dataLayer ? dataLayer[0]['contentData'].authorInfo : null;
                if (typeof authorInfos === 'string' && authorInfos.length > 0) {
                    this.authorInfos = JSON.parse(authorInfos);
                }
            }

            // 오늘 본 url 추가
            debug.log('오늘 본 url 추가 start');
            subs.addVisitUrl(urlInfo.url);
            debug.log('오늘 본 url 추가 end');

            if (this.mySets) {
                Object.keys(this.mySets).forEach(function (key) {
                    if (subs.mySets[key].notify === STATE.AUTH_PROGRESS) {
                        if (subs.login) {
                            subs.mySets[key].notify = STATE.ACCEPT;
                        } else {
                            subs.mySets[key].notify = STATE.INIT;
                        }
                    } else {
                        if (subs.mySets[key].notify === STATE.INIT) {
                            subs.mySets[key].notify = STATE.INIT;
                        }
                    }
                });
            }

            return new Promise(function (resolve, reject) {
                subs.getMyNewsFlash()
                    .then(function (result) {
                        subs.usedNewsFlash = result;
                    })
                    .then(function () {
                        if (subs.login) {
                            // 로그인 되어 있지 않으면 패스
                            subs.getMySubs().then(function (result) {
                                if (result && result['_DATA'] && result['_DATA'].length > 0) {
                                    result['_DATA'].forEach(function (item) {
                                        subs.mySubs[item.CHANNEL_TYPE + item.CHANNEL_ID] = item;
                                    });
                                }
                                return resolve(result);
                            });
                        } else {
                            return resolve();
                        }
                    });
            });
        };

        /**
         * 구독 제안 이벤트 처리
         * @param mySets
         */
        this.procSuggest = function (mySets, subsSet) {
            // 상품별 노출 페이지 설정
            if (subs.idleInterval) {
                subs.idleInterval.clearInterval();
            }
            if (subs.loadingInterval) {
                subs.loadingInterval.clearInterval();
            }
            var keys = Object.keys(mySets).sort(function (next, current) {
                return mySets[next].order - mySets[current].order;
            });
            var exposures = keys.filter(function (key) {
                var isTarget = false;
                if (mySets[key]['viewCondiYn'] === YES) {
                    var channels = [];
                    if (mySets[key].viewChannel) {
                        mySets[key].viewChannel.split(';').forEach(function (channel) {
                            var channelInfo = channel.split('|');
                            if (channelInfo.length > 1) {
                                var fIdx = mySets[key].viewChannelType === 'URL' ? 1 : 0;
                                channels.push(channelInfo[fIdx]);
                            } else {
                                channels.push(channel);
                            }
                        });
                    }
                    if (mySets[key].viewChannelType === 'URL') {
                        if (mySets[key].viewSubCat === YES) {
                            // 이전 로직
                            // channels.some(function (channel) {
                            //     return isTarget = urlInfo.path.indexOf(channel) > -1;
                            // });

                            // 포함, 제외 처리 2021.07.07(요청사항 처리)
                            if (mySets[key].viewUrlInclude === YES) {
                                // 포함 로직
                                channels.some(function (channel) {
                                    return (isTarget = urlInfo.checkUrl.indexOf(channel) > -1);
                                });
                            } else {
                                // 제외 로직
                                channels.every(function (channel) {
                                    return (isTarget = !(urlInfo.checkUrl.indexOf(channel) > -1));
                                });
                            }
                        } else {
                            if (mySets[key].viewUrlInclude === YES) {
                                // 포함 로직
                                channels.some(function (channel) {
                                    return (isTarget = urlInfo.checkUrl === channel);
                                });
                            } else {
                                // 제외 로직
                                channels.every(function (channel) {
                                    return (isTarget = !(urlInfo.checkUrl === channel));
                                });
                            }
                        }
                    } else {
                        if (subs.isTargetUrl(URL_PATTERN[mySets[key].viewChannelType])) {
                            switch (mySets[key].viewChannelType) {
                                case 'ARTPKG':
                                    if (mySets[key].viewArtpkgs) {
                                        Object.keys(mySets[key].viewArtpkgs).some(function (artKey) {
                                            return (isTarget = targetCounter.articlePackage(mySets[key].viewArtpkgs[artKey], subs.distDt, subs.sections, subs.keywords));
                                        });
                                    }
                                    break;
                                case 'REPORTER':
                                    if (subs.authorInfos) {
                                        channels.some(function (channel) {
                                            var correctAuths = subs.authorInfos.filter(function (authorInfo) {
                                                return authorInfo.seq === parseInt(channel) || authorInfo.portalSeq === parseInt(channel);
                                            });
                                            if (correctAuths != null && correctAuths.length > 0) {
                                                isTarget = true;
                                            }
                                            return isTarget;
                                        });
                                    }
                                    break;
                                case 'PKG':
                                    if (subs.issues) {
                                        subs.issues.some(function (issue) {
                                            return (isTarget = channels.indexOf(issue) > -1);
                                        });
                                    }
                                    break;
                                case 'JPOD':
                                    if (subs.jpods) {
                                        subs.jpods.some(function (jpod) {
                                            return (isTarget = channels.indexOf(jpod) > -1);
                                        });
                                    }
                                    break;
                                case 'LETTER':
                                    if (subs.letters) {
                                        subs.letters.some(function (letter) {
                                            return (isTarget = channels.indexOf(letter) > -1);
                                        });
                                    }
                                    break;
                            }
                        }
                    }
                    return isTarget;
                } else {
                    return false;
                }
            });

            if (exposures && exposures.length > 0) {
                // 구독 제안 노출 대상이 있을 경우 이벤트 핸들러 추가
                subs.exposureCnt = exposures.length;
                // 노출시점별 상품 이벤트 처리
                var exposureConds = { alwaysChk: [], leaveChk: [], scrollChk: [], loadingChk: [], idleChk: [], repeatChk: [] };
                // 이벤트 유형별로 배열처리 이벤트 핸들러 내에서의 반복 횟수 줄일 목적
                exposures.forEach(function (exposure) {
                    if (mySets[exposure]['viewCondiYn'] === YES) {
                        if (mySets[exposure].scbInfo && mySets[exposure].scbInfo.artView === YES) {
                            subs.artViewCnt++;
                        }
                        if (mySets[exposure].viewTimeYn === NO) {
                            //상시는 표시 처리 않함
                            exposureConds.alwaysChk.push(exposure);
                        }
                        if (mySets[exposure].viewTimeCondi.leaveChk === YES) {
                            exposureConds.leaveChk.push(exposure);
                        }
                        if (mySets[exposure].viewTimeCondi.scrollChk === YES) {
                            if (subs.getArticleHeight() > 0) {
                                exposureConds.scrollChk.push(exposure);
                            } else {
                                //본문 스크롤 안될때
                                exposureConds.alwaysChk.push(exposure);
                            }
                        }
                        if (mySets[exposure].viewTimeCondi.loadingChk === YES) {
                            exposureConds.loadingChk.push(exposure);
                        }
                        if (mySets[exposure].viewTimeCondi.idleChk === YES) {
                            exposureConds.idleChk.push(exposure);
                        }
                        if (mySets[exposure].viewTimeCondi.repeatChk === YES) {
                            exposureConds.repeatChk.push(exposure);
                        }
                    }
                });

                subs.setContentPermission(subs.artViewCnt === 0 ? YES : NO);

                if (exposureConds.alwaysChk.length > 0) {
                    // 상시
                    subs.handleAlwaysChk(mySets, exposureConds.alwaysChk);
                }
                // 반복 조건에 걸린걸 최우선으로 띄운다.
                if (exposureConds.repeatChk.length > 0) {
                    subs.handleRepeatChk(mySets, exposureConds.repeatChk);
                }
                // 이벤트 처리
                if (exposureConds.leaveChk.length > 0) {
                    subs.handleLeaveChk(mySets, exposureConds.leaveChk);
                }
                if (exposureConds.scrollChk.length > 0) {
                    subs.handleScrollChk(mySets, exposureConds.scrollChk);
                }
                if (exposureConds.loadingChk.length > 0) {
                    subs.handleLoadingChk(mySets, exposureConds.loadingChk);
                }
                if (exposureConds.idleChk.length > 0) {
                    subs.handleIdleChk(mySets, exposureConds.idleChk);
                }
            }
        };

        this.procSuggestComplete = function () {
            return new Promise(function (resolve) {
                var scbNo = subs.getSuggestScbNo();
                if (scbNo === null) {
                    return resolve();
                } else {
                    if (subs.login) {
                        sessionStorage.removeItem(SUGGEST_SCB_NO);
                        if (scbNo == mokaScbs.unseId) {
                            subs.myLuck()
                                .then(function (result) {
                                    if (result && result._DATA.length > 0) {
                                        //이미 구독중
                                        return resolve();
                                    } else {
                                        return subs.unsePopupRender().then(function () {
                                            subs.showTeaPopup(this);
                                            return resolve();
                                        });
                                    }
                                })
                                .catch(function (err) {
                                    debug.log(err);
                                    return resolve();
                                });
                        } else {
                            subs.insertScb(
                                scbNo,
                                function (result, resultData) {
                                    subs.success();
                                    if (typeof cbSubsComplete === 'function') {
                                        cbSubsComplete(scbNo, true);
                                    }
                                    return resolve();
                                },
                                function (errMsg) {
                                    messageUtil.toast({
                                        message: errMsg
                                    });
                                    return resolve();
                                }
                            );
                        }
                    } else {
                        return resolve();
                    }
                }
            });
        };

        /** 구독 제안 승인 처리 **/
        this.suggestCommit = function (scbNo, notify) {
            if (notify === STATE.ACCEPT) {
                if (subs.mySets[scbNo].offerMethodDiv === OFFER_METHOD.LOGIN) {
                    subs.suggestComplete(scbNo, STATE.AUTH_PROGRESS);
                    jaLogin();
                    return;
                }
                if (subs.mySets[scbNo].scbInfo.loginYn === YES && !subs.login) {
                    subs.goLoginPage(scbNo);
                    return;
                } else if (subs.mySets[scbNo].offerMethodDiv === OFFER_METHOD.SUBSCRIBE) {
                    subs.insertScb(
                        scbNo,
                        function (result, resultData) {
                            subs.suggestComplete(scbNo, notify);
                            if (result) {
                                subs.addMySubsData(resultData);
                                if (setActiveMySubs) {
                                    setActiveMySubs();
                                }
                            }
                            subs.success();
                        },
                        function (errMsg) {
                            messageUtil.toast({
                                message: errMsg
                            });
                        }
                    );
                }
            } else {
                subs.suggestComplete(scbNo, notify);
            }
        };

        /** 구독 신청 완료 처리 **/
        this.suggestComplete = function (scbNo, notify) {
            subs.mySets[scbNo].notify = notify;
            subs.setRepeatCnt(subs.mySets, scbNo);
            subs.setSubsTarget(subs.mySets);
            //subs.isNotifying = false;
        };

        /**
         * 변경/삭제 데이터 처리
         * @param changeSet 변경된 구독상품정보목록
         */
        this.procImportSubsSet = function (changeSet, subsData, recentUD) {
            return new Promise(function (resolve, reject) {
                if (changeSet != null) {
                    debug.log('저장소에서 구독 상품 로드 시작');
                    localforage.getItem(SUBS_SET_KEY).then(function (result) {
                        debug.log('저장소에서 구독 상품 로드 완료');
                        var changeKeySet = Object.keys(changeSet);
                        if (result) {
                            debug.log('삭제 상품 처리 시작');
                            var deleteKey = Object.keys(result).filter(function (oldDataKey) {
                                return changeKeySet.indexOf(oldDataKey) === -1;
                            });

                            if (deleteKey.length > 0) {
                                debug.log('삭제 상품 존재, 건수 : ' + deleteKey.length);
                                deleteKey.forEach(function (key) {
                                    delete result[key];
                                    if (subsData[key]) {
                                        // 사용자 로그 있을 경우 삭제
                                        delete subsData[key];
                                    }
                                });
                            }
                            debug.log('삭제 상품 처리 완료');
                        }

                        debug.log('구독 상품 갱신 및 사용자 정보 리셋 시작');
                        Object.keys(changeSet).forEach(function (key) {
                            var usk = subs.getProductKey(changeSet[key]);
                            if (!subsData[key] || diffRecentDate(changeSet[key].baseDt, subsData[key].baseDt) > 0) {
                                // 기존 데이터 없거나 수정일 비교
                                if (!subs.mySubs[usk]) {
                                    // 구독중인 상품 제외
                                    subsData[key] = subs.createNewUserSubsData(changeSet[key].modDt);
                                }
                            } else {
                                if (subs.mySubs[usk]) {
                                    // 구독중인 상품인 경우
                                    delete subsData[key];
                                } else {
                                    if (!subsData[key][subs.cDate]) {
                                        // 오늘 날짜 없는 경우
                                        subsData[key][subs.cDate] = defaultSubsData;
                                    }
                                }
                            }
                        });
                        // 상품 정보 업데이트
                        subs.setSubsSet(changeSet).then(function (subsSet) {
                            // 사용자 로그 업데이트
                            subs.setSubsData(subsData);

                            // 가장 최근 상품 갱신 날짜 업데이트
                            if (recentUD) {
                                localStorage.setItem(RECENT_UD_KEY, recentUD);
                            }

                            debug.log('구독 상품 갱신 및 사용자 정보 리셋 완료');
                            return resolve(subsSet);
                        });
                    });
                }
            });
        };

        /**
         * 구독 대상 상품 처리
         * @param url pageUrl
         * @param content 페이지 response
         */
        this.procTarget = function (subsSet) {
            return new Promise(function (resolve, reject) {
                debug.log('구독 상품 대상 여부 연산 start');
                try {
                    var subsDatas = subs.getSubsData();
                    subsDatas = subs.procAddViewCnt(subsSet, subsDatas);
                    subs.setSubsData(subsDatas);
                    var mySets = subs.procExtractTarget(subsSet, subsDatas);
                    debug.log('구독 상품 대상 여부 연산 종료');
                    return resolve(mySets);
                } catch (e) {
                    console.log(e);
                    return reject();
                }
            });
        };

        /**
         * 조회수 증가 처리
         * @param subsSet
         * @param subsDatas
         * @returns {*}
         */
        this.procAddViewCnt = function (subsSet, subsDatas) {
            Object.keys(subsDatas).forEach(function (set) {
                if (subsSet[set] && subsSet[set].tgAll !== YES) {
                    subsSet[set].tgDiv.forEach(function (div) {
                        targetCounter.count(div, subsSet[set], subsDatas[set], subs.revisit);
                    });
                }
            });
            return subsDatas;
        };

        /**
         * 상품정보에서 구독 대상 set 추출
         * @param subsSet 구독설계정보
         * @param subsDatas 계량정보
         * @returns {{}}
         */
        this.procExtractTarget = function (subsSet, subsDatas) {
            var sets = {};
            var suggestLog = {}; // 테스트로그위해 담아두는 객체, 테스트 종료시 삭제 필요

            Object.keys(subsDatas).forEach(function (key) {
                if (typeof subsSet[key] === 'undefined') {
                    return true;
                }
                var tgAndOr = subsSet[key].tgAndOr === AND;
                suggestLog[key] = {};
                suggestLog[key].tgAll = subsSet[key].tgAll;
                suggestLog[key].tgAndOr = tgAndOr;
                suggestLog[key].result = false;

                var scbInfo = subsSet[key].scbInfo;

                var usk = subs.getProductKey(subsSet[key]);
                if (scbInfo.payFlag.trim() === NO && subs.mySubs[usk]) {
                    // 로그인 제안인데 로그인 되어 있으면 이후 로직 무시
                    return;
                }

                if (scbInfo.loginYn === YES && subs.login && scbInfo.payFlag === '') {
                    // 로그인 제안인데 로그인 되어 있으면 이후 로직 무시
                    return;
                }

                if (subsSet[key].tgAll === YES) {
                    sets[key] = Object.assign({}, subsSet[key]);
                    sets[key].notify = STATE.INIT;
                    suggestLog[key].result = true;
                } else {
                    var condResult = false;

                    subsSet[key].tgDiv.some(function (div) {
                        var isSuggest = targetChecker.isTarget(div, subsSet[key], subsDatas[key]);

                        suggestLog[key][div] = isSuggest;
                        condResult = isSuggest;
                        if (tgAndOr) {
                            if (!isSuggest) {
                                return true;
                            }
                        } else {
                            if (isSuggest) {
                                return true;
                            }
                        }
                    });
                    if (condResult) {
                        sets[key] = Object.assign({}, subsSet[key]);
                        sets[key].notify = STATE.INIT;
                        sets[key].pIdx = -1;
                        suggestLog[key].result = true;
                    }
                }
            });
            if (subs.mySets) {
                // 반복 조건 계량 위해 기존 mySets와 현재 mySets 비교
                Object.keys(subs.mySets).forEach(function (key) {
                    if (subsSet[key]) {
                        // 상품 정보 있는지 체크
                        if (sets[key]) {
                            // 구독 제안 대상인지 체크
                            sets[key].notify = subs.mySets[key].notify;
                            if (typeof subs.mySets[key].repeatCnt !== 'undefined') {
                                sets[key].repeatCnt = subs.mySets[key].repeatCnt;
                                sets[key].repeatTurn = subs.mySets[key].repeatTurn;
                                sets[key].isRepeatTarget = true;
                            }
                        } else {
                            // 구독 제안 대상이 아니면 반복 제안 카운트 고정
                            if (typeof subs.mySets[key].repeatCnt !== 'undefined') {
                                sets[key] = Object.assign({}, subs.mySets[key]);
                                sets[key].isRepeatTarget = false;
                            }
                        }

                        if (subsDatas[key] && subsDatas[key][subs.cDate] && sets[key]) {
                            sets[key].pIdx = subsDatas[key][subs.cDate].pIdx;
                        }
                    }
                });
            }
            /*로그 출력, 나중엔 삭제 start*/
            localforage.setItem(SUGGEST_LOG_KEY, suggestLog);
            if (typeof displayLogTable === 'function') {
                displayLogTable(suggestLog);
            }
            /*로그 출력, 나중엔 삭제 end*/

            return sets;
        };

        /**
         * 구독 제안 화면 알림 표시
         * @param scbNo 구독상품 번호
         * @param isSuggest 재건의
         */
        this.procSuggestMethod = function (scbNo, state) {
            if (!subs.isNotifying) {
                if (subs.canNotify(subs.mySets[scbNo], state ? state : subs.mySets[scbNo].notify, subs.visitPageIdx)) {
                    subs.isNotifying = true;
                    // 이미 구독 중이면 bypass
                    if (subs.isSubscribing(subs.mySets[scbNo].scbInfo['cType'], subs.mySets[scbNo].scbInfo['cId'])) {
                        return;
                    }
                    subs.currentScbNo = scbNo;
                    setTimeout(function () {
                        subs.show(scbNo)
                            .then(function (mySets) {
                                // 승인 프로세스
                                subs.mySets = Object.assign(subs.mySets, mySets);
                                subs.suggestCommit(scbNo, STATE.ACCEPT);
                            })
                            .catch(function (mySets) {
                                // 거절 프로세스
                                subs.mySets = Object.assign(subs.mySets, mySets);
                                if (subs.mySets[scbNo].scbInfo && subs.mySets[scbNo].scbInfo.artView === YES) {
                                    // 기사 열람이면 거절했을 경우 반복 노출 한다.
                                    subs.suggestComplete(scbNo, STATE.ARTVIEW);
                                } else {
                                    // 일반적으로는 REJECT상태 유지
                                    subs.suggestComplete(scbNo, STATE.REJECT);
                                }
                                subs.addRejectSuggest(scbNo);
                                if (subs.mySets[scbNo].scbInfo.artView === YES) {
                                    // 20210827 로그인 페이지일경우 로직 추가 - thkim
                                    if (urlInfo.prev === ACCOUNT_URL || urlInfo.prev === urlInfo.url) {
                                        window.location.href = '/';
                                    } else {
                                        window.location.href = urlInfo.prev;
                                    }
                                } else {
                                    subs.closeMsg();
                                }
                            });
                    }, 10);
                }
            } else {
                // 우선순위 낮은 구독 제안
                debug.log('blocked suggest', scbNo);
            }
        };

        /**
         * 구독 요청 처리
         * @param subsId 구독상품 번호
         * @param isSubs 구독 승인/구독 해제
         * @param success 성공 callback
         * @param fail 실패 callback
         */
        this.procApplySubscribe = function (subsId, isSubs, success, fail) {
            if (mokaScbs.unseId == subsId) {
                if (isSubs) {
                    subs.unsePopupRender().then(function () {
                        subs.showTeaPopup();
                    });
                    // if (!myInfoDTO.tea && !myInfoDTO.year) {
                    // 	subs.unsePopupRender().then(function () {
                    // 		subs.showTeaPopup();
                    // 	});
                    // } else {
                    // 	subs.unseSaveProcess(myInfoDTO.tea, myInfoDTO.year);
                    // }
                } else {
                    subs.cancelUnse(subsId)
                        .then(function (result) {
                            $.each(window.mySubs, function (index, item) {
                                // 20210825 구독 정보 해제시 구독 아이디 뿐 아니라 대표 구독아이디도 확인 - thkim
                                //if (item && item["SCB_NO"] == subsId) {
                                if (item && (item['SCB_NO'] == subsId || item['MAIN_SCB_NO'] == subsId)) {
                                    window.mySubs.splice(index, 1);
                                }
                            });
                            if (setActiveMySubs) {
                                setActiveMySubs();
                            }
                            if (typeof success !== 'undefined') {
                                success(result);
                            }
                        })
                        .catch(function (err) {
                            if (typeof fail !== 'undefined') {
                                fail(err);
                            }
                        });
                }
            } else {
                subs.subscribeProcess(subsId, isSubs)
                    .then(function (result) {
                        if (isSubs) {
                            // 20210825 구독 버튼을 누른 이후 서버에서 내려온 데이터로 mysubs에 추가 - thkim
                            //window.mySubs.push({"SCB_NO": subsId, "SCB_TARGET_NAME": result['_MESSAGE']['_DATA']});
                            subs.addMySubsData(result);
                            /*if(result) {
                var resultInfo = result["_INFO"];
                if(resultInfo) {
                    var addMySubs = resultInfo["_DATA"];
                    if(Array.isArray(addMySubs)) {
                        var addMySubs = resultInfo["_DATA"];
                        if (Array.isArray(addMySubs)) {
                            addMySubs.forEach(function (subs) {
                                window.mySubs.push(subs);
                            });
                        }
                    }
                }
            }*/
                        } else {
                            $.each(window.mySubs, function (index, item) {
                                // 20210825 구독 정보 해제시 구독 아이디 뿐 아니라 대표 구독아이디도 확인 - thkim
                                //if (item && item["SCB_NO"] == subsId) {
                                if (item && (item['SCB_NO'] == subsId || item['MAIN_SCB_NO'] == subsId)) {
                                    window.mySubs.splice(index, 1);
                                }
                            });
                        }
                        if (setActiveMySubs) {
                            setActiveMySubs();
                        }
                        if (typeof success !== 'undefined') {
                            success(result);
                        }
                    })
                    .catch(function (result) {
                        if (result['_ERR_CODE'] && result['_ERR_CODE']['_DATA'] === SUBS_ERROR_CODE.AGREE) {
                            subs.showNewsLetterAgree(
                                function (result) {
                                    if (result['_SUCCESS'] && result['_SUCCESS']['_DATA']) {
                                        subs.procApplySubscribe(subsId, isSubs, success, fail);
                                    } else {
                                        messageUtil.alert({ message: result._MESSAGE._DATA });
                                    }
                                },
                                function (result) {
                                    messageUtil.alert({ message: result._MESSAGE._DATA });
                                },
                                function () {
                                    sessionStorage.removeItem(SUGGEST_SCB_NO);
                                    success(false, null);
                                }
                            );
                        } else {
                            //에러를 callback에 던짐
                            if (typeof fail !== 'undefined') {
                                fail(result);
                            }
                        }
                    });
            }
        };

        /**
         * 대표 상품 구독 제안 처리
         */
        this.procRepProduct = function () {
            /**
             * 로그인 월
             */
            if (subs.exposureCnt === 0) {
                switch (mokaScbs.scbFlag) {
                    case 'M':
                        if (utils.member.isMem()) {
                            subs.setContentPermission(YES);
                            break;
                        }
                        subs.setContentPermission(NO);
                        debug.log('login suggest');
                        subs.setArticleWall();
                        var scbNo = '1';
                        subs.mySets[scbNo] = {
                            notify: STATE.INIT,
                            scbInfo: {
                                loginYn: YES,
                                mainYn: YES,
                                artView: YES
                            },
                            viewTimeCondi: {
                                scrollUnit: SCROLL_UNIT.PERCENT,
                                scrollValue: DEFAULT_SCROLL_DEEP_RATE
                            }
                        };
                        var callback = function () {
                            setTimeout(function () {
                                if (subs.isSubscribing(subs.mySets[scbNo].scbInfo['cType'], subs.mySets[scbNo].scbInfo['cId'])) {
                                    return;
                                }
                                if (!subs.isNotifying) {
                                    subs.isNotifying = true;
                                    $('#loginWall .btn_pass').unbind('click');
                                    $('#loginWall .btn_close').unbind('click');
                                    $('#loginWall .btn_pass,#loginWall .btn_close').click(function (e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.location.href = urlInfo.prev;
                                    });
                                    $('body, html').addClass('overflow_hidden');
                                    setDisableBodyScroll();
                                    subs.openSubsLayer(null, { target: $('#loginWall'), close: false, subsItem: subs.mySets[scbNo] });
                                }
                            }, SUGGEST_DELAY);
                        };
                        if (subs.getArticleHeight() > 0) {
                            subs.handleScrollChk(subs.mySets, [scbNo], callback);
                        } else {
                            subs.handleAlwaysChk(subs.mySets, [scbNo], callback);
                        }
                        break;
                    case 'S':
                        debug.log('subscribe only');
                        var scbNo = mokaScbs.scbNo;
                        var scbName = mokaScbs.scbName;
                        var cType = mokaScbs.cType;
                        var cId = mokaScbs.cId;
                        if (scbNo) {
                            if (subs.isSubscribing(cType, cId)) {
                                subs.setContentPermission(YES);
                                break;
                            }
                            subs.setContentPermission(NO);
                            subs.setArticleWall();
                            subs.mySets[scbNo] = {
                                notify: STATE.INIT,
                                offerMethodDiv: OFFER_METHOD.SUBSCRIBE,
                                scbInfo: {
                                    cId: cId,
                                    cType: cType,
                                    scbName: scbName,
                                    loginYn: YES,
                                    mainYn: YES,
                                    artView: YES
                                },
                                scbNo: scbNo,
                                viewTimeCondi: {
                                    scrollChk: YES,
                                    scrollUnit: SCROLL_UNIT.PERCENT,
                                    scrollValue: DEFAULT_SCROLL_DEEP_RATE
                                },
                                offerMethod: {
                                    suggest: null
                                }
                            };
                            var callback = function () {
                                if (subs.isSubscribing(subs.mySets[scbNo].scbInfo['cType'], subs.mySets[scbNo].scbInfo['cId'])) {
                                    return;
                                }
                                if (!subs.isNotifying) {
                                    subs.isNotifying = true;
                                    subs.suggest(subs.mySets[scbNo])
                                        .then(function (ok) {
                                            if (ok) {
                                                subs.suggestCommit(scbNo, STATE.ACCEPT);
                                            } else {
                                                subs.goPrevUrl();
                                            }
                                        })
                                        .catch(function (err) {
                                            debug.log(err);
                                            subs.goPrevUrl();
                                        });
                                }
                            };
                            if (subs.getArticleHeight() > 0) {
                                subs.handleScrollChk(subs.mySets, [scbNo], callback);
                            } else {
                                subs.handleAlwaysChk(subs.mySets, [scbNo], callback);
                            }
                        }
                        break;
                    default:
                        subs.setContentPermission(YES);
                }
            }
        };

        this.goPrevUrl = function () {
            if (urlInfo.prev === ACCOUNT_URL || urlInfo.prev === urlInfo.url) {
                window.location.href = '/';
            } else {
                if ($('#layer_onboard').length === 0 || $('#layer_onboard').hasClass('hide')) {
                    window.location.href = urlInfo.prev;
                }
            }
        };
        /**
         * 구독 처리
         * @param subsid 구독 설계 번호
         * @param isSubs 구독 or 취소
         * @param callback 후처리
         */
        this.subscribeProcess = function (subsId, isSubs) {
            var api = isSubs ? 'subscribe.insert' : 'subscribe.delete';
            return new Promise(function (resolve, reject) {
                subs.sendSubscribe(api, subsId)
                    .then(function (result) {
                        if (result['_SUCCESS'] && !result['_SUCCESS']['_DATA']) {
                            return reject(result);
                        } else {
                            return resolve(result);
                        }
                    })
                    .catch(function (error) {
                        debug.log(api + ' error', error);
                        return reject('구독 ' + (isSubs ? '등록' : '취소') + '중 오류가 발생했습니다. 관리자에게 문의하세요.');
                    });
            });
        };

        this.isTargetUrl = function (urlParts) {
            var isTarget = true;
            if (urlParts) {
                urlParts.some(function (urlPart) {
                    return (isTarget = urlInfo.checkUrl.indexOf(urlPart) > -1);
                });
            }
            return isTarget;
        };

        this.isSubscribing = function(){}