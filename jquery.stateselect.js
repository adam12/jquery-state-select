/*
 * Simple State/Province Select plugin for jQuery
 * 
 * Example:
 * $(document).ready(function() {
 *    $('#country').linkToStates('#state');
 *  });
 *
 * Copyright (c) 2008 Adam Daniels
 * Licensed under the MIT License *
 */
;(function($) {
  var canadian_provinces = {
		'Ontario' : 'Ontario',
		'Quebec' : 'Quebec',
		'Manitoba' : 'Manitoba',
		'Alberta' : 'Alberta',
		'New Foundland and Labrador' : 'New Foundland and Labrador',
		'Nova Scotia' : 'Nova Scotia',
		'Prince Edward Island' : 'Prince Edward Island',
		'Saskatchewan' : 'Saskatchewan',
		'Nunavut' : 'Nunavut',
		'British Columbia' : 'British Columbia',
		'New Brunswick' : 'New Brunswick',
		'Yukon' : 'Yukon',
		'Northwest Territories' : 'Northwest Territories'
	}

	var us_states = {
		'Alabama' : 'Alabama',
		'Alaska' : 'Alaska',
		'Arizona' : 'Arizona',
		'Arkansas' : 'Arkansas',
		'California' : 'California',
		'Colorado' : 'Colorado',
		'Connecticut' : 'Connecticut',
		'Delaware' : 'Delaware',							
		'Florida' : 'Florida',
		'Georgia' : 'Georgia',
		'Hawaii' : 'Hawaii',
		'Idaho' : 'Idaho',
		'Illinois' : 'Illinois',
		'Indiana' : 'Indiana',
		'Iowa' : 'Iowa',
		'Kansas' : 'Kansas',
		'Kentucky' : 'Kentucky',
		'Louisiana' : 'Louisiana',
		'Maine' : 'Maine',
		'Maryland' : 'Maryland',
		'Massachusetts' : 'Massachusetts',
		'Michigan' : 'Michigan',
		'Minnesota' : 'Minnesota',
		'Mississippi' : 'Mississippi',
		'Missouri' : 'Missouri',
		'Montana' : 'Montana',
		'Nebraska' : 'Nebraska',
		'Nevada' : 'Nevada',
		'New Hampshire' : 'New Hampshire',
		'New Jersey' : 'New Jersey',							
		'New Mexico' : 'New Mexico',
		'New York' : 'New York',
		'North Carolina' : 'North Carolina',
		'North Dakota' : 'North Dakota',
		'Ohio' : 'Ohio',
		'Oklahoma' : 'Oklahoma',
		'Oregon' : 'Oregon',
		'Pennsylvania' : 'Pennsylvania',
		'Rhode Island' : 'Rhode Island',
		'South Carolina' : 'South Carolina',
		'South Dakota' : 'South Dakota',
		'Tennessee' : 'Tennessee',
		'Texas' : 'Texas',
		'Utah' : 'Utah',
		'Vermont' : 'Vermont',
		'Virginia' : 'Virginia',
		'Washington' : 'Washington',
		'West Virginia' : 'West Virginia',
		'Wisconsin' : 'Wisconsin',
		'Wyoming' : 'Wyoming'
	}
  
  $.fn.extend({
		linkToStates: function(state_select_id) {
      $(this).change(function() {
        var country = $(this).attr('value');
        $(state_select_id).removeOption(/.*/);
        switch (country) {
          case 'Canada':
            $(state_select_id).addOption(canadian_provinces, false);
            break;
          case 'United States':
            $(state_select_id).addOption(us_states, false);
            break;
          default:
            $(state_select_id).addOption({ '' : 'Please select a Country'}, false);
            break;
        }
      });
    }
  });
})(jQuery);
