/*!
 * ${copyright}
 */

// Provides control sap.m.SelectionDetailsItem.
sap.ui.define(["jquery.sap.global", "sap/ui/core/Element", "sap/m/ListItemBase", "./library"],
	function(jQuery, Element, ListItemBase, library) {
	"use strict";

	/**
	 * @private
	 */
	var SelectionDetailsListItem = ListItemBase.extend("sap.m.SelectionDetailsListItem", {
		renderer: "sap.m.SelectionDetailsItemRenderer",
		metadata: {
		}
	});

	/**
	 * Constructor for a new SelectionDetailsItem.
	 *
	 * @param {string} [sId] Id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * This Element provides an item for {@link sap.m.SelectionDetails} that is shown inside a list.
	 * The item includes SelectionDetailsItemField as its fields that are displayed in one block above the optional actions.
	 * It is intended to be used only in the sap.m.SelectionDetails control.
	 *
	 * @extends sap.ui.core.Element
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias sap.m.SelectionDetailsItem
	 * @experimental Since 1.48 This control is still under development and might change at any point in time.
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var SelectionDetailsItem = Element.extend("sap.m.SelectionDetailsItem", /** @lends sap.m.SelectionDetailsItem.prototype */ {
		metadata : {
			library : "sap.m",
			properties : {
				/**
				 * Determines whether or not a navigation event is triggered on press.
				 */
				navigationEnabled: { type: "boolean", defaultValue: false, group: "Behavior" }
			},
			aggregations: {
				/**
				 * Holds a record of information about, for example, measures and dimensions.
				 * These entries are usually obtained via selection in chart controls.
				 */
				fields: { type: "sap.m.SelectionDetailsItemField", multiple: true, bindable: "bindable" },

				/**
				 * Holds custom actions shown below the main content of the item.
				 */
				actions: { type: "sap.ui.core.Item", multiple: true }
			}
		}
	});

	SelectionDetailsItem.prototype.init = function() { };

	/**
	 * Builds or changes a SelectionDetailsListItem and returns it.
	 * @returns {sap.m.SelectionDetailsListItem} The item that has been created or changed
	 * @private
	 */
	SelectionDetailsItem.prototype._getListItem = function() {
		var oListItem = this.getAggregation("_listItem") || new SelectionDetailsListItem();

		if (this.getNavigationEnabled()) {
			oListItem.setProperty("type", library.ListType.Navigation, true);
		} else {
			oListItem.setProperty("type", library.ListType.Inactive, true);
		}

		this.addDependent(oListItem);
		return oListItem;
	};

	return SelectionDetailsItem;

}, /* bExport= */ true);
