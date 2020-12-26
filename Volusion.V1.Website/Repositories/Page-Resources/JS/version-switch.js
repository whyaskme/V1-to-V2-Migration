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

    msg += '<div>Upgrading versions can take some time to complete. We will send you an email once finished. In the meantime, your site will continue to run as it is.</div>';
    msg += '<div><input type=\'button\' value=\'Upgrade\' onclick=\'javascript: continueMigration(upgrade);\' class=\'button\' /></div>';

    $("#span-repository-type").html(sourceServices);
    $("#div-message-details").html(msg);

    $("#span-migration-info-container").show();
}

function migrateVersionFromV2() {
    $("#span-tenantId").html('');

    msg += '<div>Downgrading versions can take some time to complete. We will send you an email once finished. In the meantime, your site will continue to run as it is.</div>';
    msg += '<div><input type=\'button\' value=\'Downgrade\' onclick=\'javascript: continueMigration(downgrade);\' class=\'button\' /></div>';

    $("#span-repository-type").html(sourceDB);
    $("#div-message-details").html(msg);

    $("#span-migration-info-container").show();
}

function continueMigration(migrationType) {
    alert("Direction: " + migrationType);
}