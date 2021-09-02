$(document).ready(function() {
    $("#organization-page").hide();
    $("#volunteer-page").hide();

    let volunteerEvent = {
        "nameOfOrganization": "",
        "websiteUrl": "",
        "organizationImageUrl": "",
        "postalCode": "",
        "heading": "",
        "description": "",
        "categories": "",
        "date": ""
    };

    var volunteerEventArray = [];

    // This process will be used by loop to take data from database from future
    // Hard-code the event information
    volunteerEvent.nameOfOrganization = "Budweiser";
    volunteerEvent.websiteUrl = "https://www.blogto.com/events/maroon-5-live-toronto-september-toronto/";
    volunteerEvent.organizationImageUrl = "https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80";
    volunteerEvent.postalCode = "M6K 3L3";
    volunteerEvent.heading = "Event Helper";
    volunteerEvent.description = "Planning event details and aspects, including seating, dining and guests.";
    volunteerEvent.categories = "music";
    volunteerEvent.date = "2021-09-01";
    volunteerEventArray.push(volunteerEvent);

    volunteerEvent = new Object();

    volunteerEvent.nameOfOrganization = "Toby Keith";
    volunteerEvent.websiteUrl = "https://www.eventbrite.com/e/dean-brody-james-barker-band-jade-eagleson-special-guests-tickets-164654667543?aff=ebdssbcitybrowse&keep_tld=1";
    volunteerEvent.organizationImageUrl = "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80";
    volunteerEvent.postalCode = "M6K 3L3";
    volunteerEvent.heading = "Event Helper";
    volunteerEvent.description = "Planning event details and aspects, including seating, dining and guests.";
    volunteerEvent.categories = "music";
    volunteerEvent.date = "2021-09-01";
    volunteerEventArray.push(volunteerEvent);

    volunteerEvent = new Object();

    volunteerEvent.nameOfOrganization = "ALL AGES";
    volunteerEvent.websiteUrl = "https://www.eventbrite.com/e/afrofest-ottawa-2021-tickets-166972943569?aff=ebdssbcitybrowse&keep_tld=1";
    volunteerEvent.organizationImageUrl = "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    volunteerEvent.postalCode = "M6K 3L3";
    volunteerEvent.heading = "Event Helper";
    volunteerEvent.description = "Planning event details and aspects, including seating, dining and guests.";
    volunteerEvent.categories = "music";
    volunteerEvent.date = "2021-09-01";
    volunteerEventArray.push(volunteerEvent);

    volunteerEvent = new Object();

    volunteerEvent.nameOfOrganization = "ALL AGES";
    volunteerEvent.websiteUrl = "https://www.eventbrite.com/e/empire-welcome-home-weekend-blue-rodeo-tickets-165023284085?aff=ebdssbcitybrowse&keep_tld=1";
    volunteerEvent.organizationImageUrl = "https://images.unsplash.com/photo-1561489396-888724a1543d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    volunteerEvent.postalCode = "M6K 3L3";
    volunteerEvent.heading = "Event Helper";
    volunteerEvent.description = "Planning event details and aspects, including seating, dining and guests.";
    volunteerEvent.categories = "music";
    volunteerEvent.date = "2021-09-01";
    volunteerEventArray.push(volunteerEvent);

    // Validate input and add new event to array
    $("#submitOrganizationForm").click(function() {
        if ($("#form-nameOfOrganization").val() === "" ||
            $("#form-websiteUrl").val() === "" ||
            $("#form-organizationImageUrl").val() === "" ||
            $("#form-postalCode").val() === "" ||
            $("#form-heading").val() === "" ||
            $("#form-categories").val() === "" ||
            $("#form-date").val() === "" ||
            $("#form-description").val() === ""
        ) {
            return;
        }
        // Validate before creating new object for
        // - Making sure data valid 
        // - Preventing from spamming "post" button to make many new objects in database
        volunteerEvent = new Object();
        volunteerEvent.nameOfOrganization = $("#form-nameOfOrganization").val();
        volunteerEvent.websiteUrl = $("#form-websiteUrl").val();
        volunteerEvent.organizationImageUrl = $("#form-organizationImageUrl").val();
        volunteerEvent.postalCode = $("#form-postalCode").val();
        volunteerEvent.heading = $("#form-heading").val();
        volunteerEvent.description = $("#form-description").val();
        volunteerEvent.categories = $("#form-categories").val();
        volunteerEvent.date = $("#form-date").val();

        volunteerEventArray.push(volunteerEvent);

        alert("New event has been successfully added");
    });

    // Heading Navigation Button - Volunteers
    $("#volunteerNav").click(function() {
        $("#organization-page").hide("slow");
        loadEvent();
        loadUserList();
        $("#volunteer-page").show("slow");
    });

    // Heading Navigation Button - Organizations
    $("#organizationsNav").click(function() {
        $("#organization-page").show("slow");
        $("#volunteer-page").hide("slow");
    });

    // Load event to page
    function loadEvent() {
        $("#eventItemContainer").html("");
        for (let event of volunteerEventArray) {
            let output = '<a href="' + event.websiteUrl + '" target="parent">' +
                '<div class="eventItem">' +
                '<div style="width: 400px; height: 250px;border: 2px solid black; background-image: url(' + event.organizationImageUrl + ');' + 'background-position: center; background-size: cover; background-repeat: no-repeat;"></div>' +
                '<h3 class="eventItem-heading eventItemAtt">' + event.heading + ' - ' + event.nameOfOrganization + '</h3>' +
                '<p class="eventItem-postalCode eventItemAtt">' + event.postalCode + '</p>' +
                '<h5 class="eventItemAtt eventItem-description">' + event.description + '</h5>' +
                '<p class="eventItemAtt">' + event.date + '</p>' +
                '<p class="eventItemAtt">#' + event.categories + '</p>' +
                '</div>' +
                '</a>';
            $("#eventItemContainer").append(output);
        }
    }


    let newUser = {
        name: "",
        email: "",
        phone: ""
    }

    let userList = [];

    // Get data from online api
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        dataType: "json",
        success: function(data) {
            for (let user of data) {
                newUser = new Object();
                newUser.name = user.name;
                newUser.email = user.email;
                newUser.phone = user.phone;
                userList.push(user);
            }
        },
        error: function(e) {
            alert(e)
        }
    });

    // Load user info to page
    function loadUserList() {
        $("#userList").html("");
        for (let user of userList) {
            console.log('<div class="userList-userItem" >' + user.name + " - " + user.phone + " - " + user.email + "< /div>");
            $("#userList").append('<div class="userList-userItem" >' + user.name + " - " + user.phone + " - " + user.email + "</div>");
        }
    }
});