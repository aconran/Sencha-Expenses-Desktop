/*
 * File: app/view/ui/ExpenseTracker.js
 * Date: Tue Oct 25 2011 05:35:09 GMT-0700 (PDT)
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.ExpenseTracker', {
    extend: 'Ext.panel.Panel',
    requires: [
        'MyApp.view.ExpenseGrid',
        'MyApp.view.ExpensePieChart',
        'MyApp.view.ExpenseColumnChart'
    ],

    height: 363,
    width: 794,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    title: 'Expense Tracker',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'expensegrid',
                    flex: 1
                },
                {
                    xtype: 'container',
                    itemId: 'chartCt',
                    activeItem: 0,
                    layout: {
                        type: 'card'
                    },
                    flex: 1,
                    items: [
                        {
                            xtype: 'expensepiechart'
                        },
                        {
                            xtype: 'expensecolumnchart'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Category',
                            emptyText: 'All Categories',
                            displayField: 'category',
                            store: 'CategoryStore',
                            listeners: {
                                change: {
                                    scope: me,
                                    fn: me.onComboboxChange
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onComboboxChange: function(field, newValue, oldValue, options) {
    }

});