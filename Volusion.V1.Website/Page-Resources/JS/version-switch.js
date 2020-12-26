const objIdEmpty = 'ObjectId("000000000000000000000000")';
const objIdTenant = 'ObjectId("57b2229fd00bc11c2c18ec3d")';

let msg = '';

$(document).ready(function () {
    $("#span-tenantId").html('');
});

function setVersion(value) {
    msg = '';
    $("#div-system-messages").show();

    if (value === 'v1') {
        migrateVersionFromV2();
    }
    else {
        migrateVersionToV2();
    }
}

function migrateVersionToV2() {
    $("#span-tenantId").html(objIdTenant);

    msg += 'Upgrade message...';

    $("#span-repository-type").html('Microservices');
    $("#div-message-details").html(msg);
}

function migrateVersionFromV2() {
    $("#span-tenantId").html('');

    msg += 'Downgrade message...';

    $("#span-repository-type").html('Database');
    $("#div-message-details").html(msg);
}