const objIdEmpty = 'ObjectId("000000000000000000000000")';
const objIdTenant = 'ObjectId("57b2229fd00bc11c2c18ec3d")';

const sourceDB = "Database ( 'localhost\\Volusion-V1' )";
const sourceServices = "Services ( 'https://127.0.0.1/Volusion-V2' )";

let msg = '';

$(document).ready(function () {
    $("#span-tenantId").html('');
    $("#span-repository-type").html(sourceDB);
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

    $("#span-repository-type").html(sourceServices);
    $("#div-message-details").html(msg);

    $("#span-migration-info-container").show();
}

function migrateVersionFromV2() {
    $("#span-tenantId").html('');

    msg += 'Downgrade message...';

    $("#span-repository-type").html(sourceDB);
    $("#div-message-details").html(msg);

    $("#span-migration-info-container").show();
}