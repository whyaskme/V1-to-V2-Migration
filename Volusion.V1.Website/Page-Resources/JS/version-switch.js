const objIdEmpty = 'ObjectId("000000000000000000000000")';
const objIdTenant = 'ObjectId("57b2229fd00bc11c2c18ec3d")';

const envLegacyLabel = '<b>v1 (Legacy)</b>';
const envUpgradeLabel = '<b>v2 (MicroServices)</b>';

const sourceDB = "Db -> localhost\Volusion-V1";
const sourceServices = "Svc -> http://localhost/api/";

var msg = "";


$(document).ready(function () {
    $("#span-tenantId").html('');
    $("#span-envLegacyLabel").html(envLegacyLabel);
    $("#span-envUpgradeLabel").html(envUpgradeLabel);
    $("#span-repository-type").html(sourceDB);
});

function expandMigrationPanel()
{
    $("#div-version-switch-panel").show();
}

function setVersion(value) {

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

    msg = "";
    msg += '<div>';
    msg += '<b>Upgrade:</b> We need to migrate your data and images forward to the ' + envUpgradeLabel + ' environment.';
    msg += '&nbsp;We will send you an email once finished. In the meantime, your site will continue to run as it is.';
    msg += '</div >';
    msg += '<div id=\'div-button-container\'>';
    msg += '<input type =\'button\' value=\'Upgrade\' class=\'button\' />';
    msg += '</div>';

    $("#div-system-messages").html(msg);

    $("#span-repository-type").html(sourceServices);

    $("#span-migration-info-container").show();
}

function migrateVersionFromV2() {
    $("#span-tenantId").html('');

    msg = "";
    msg += '<div>';
    msg += '<b>Downgrade:</b> We need to migrate your data and images back to the ' + envLegacyLabel + ' environment.';
    msg += '&nbsp;We will send you an email once finished. In the meantime, your site will continue to run as it is.';
    msg += '</div >';
    msg += '<div id=\'div-button-container\'>';
    msg += '<input type =\'button\' value=\'Downgrade\' class=\'button\' />';
    msg += '</div>';

    $("#div-system-messages").html(msg);

    $("#span-repository-type").html(sourceDB);

    $("#span-migration-info-container").show();
}

function continueMigration(migrationType) {
    alert("Direction: " + migrationType);
}