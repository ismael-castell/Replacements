//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2009, 2012 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------
 

/**
 * @fileOverview This file triggers various Coremetrics events upon user actions. The following five events are supported: 
 * 1. pageview: This event is triggered when a new page is loaded, part of a page is refreshed, or the mini shopping cart is accessed 
 * 2. productview: This event is triggered when a catalog entry is viewed using Quick Info button 
 * 3. cartview: This event is triggered when a user's cart is updated in any way, such as item being added, item being
 *    deleted, quantity being updated, shipping being updated, and payment being updated. 
 * 4. element: This event is triggered when filtering criteria or sorting criteria in a fast finder is updated. 
 * 5. registration: This event is triggered when the user updates his account information
 * 
 * @version 1.0
 * 
 **/

/**
* @class analyticsJS This class defines all the variables and functions used by the Analytics.js 
* One and only one global analyticsJS should be created. Therefore, we create this object only when it is not present in 
* in the global namespace.
*
**/

