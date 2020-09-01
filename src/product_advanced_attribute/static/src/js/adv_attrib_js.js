odoo.define('product_advanced_attribute.adv_attrib_js', function(require){
    'use strict';

    $(document).on('change','.applied_filters .js_applied_attributes .applied_filters-checkbox input[name="attrib"]',function(e){
        if (!e.isDefaultPrevented()) {
            e.preventDefault();
            $(this).parents("form.js_applied_attributes").submit();
            return true;
        }
    });
});
