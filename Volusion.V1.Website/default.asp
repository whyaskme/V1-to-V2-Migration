<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Homepage (App Migration)</title>
</head>
<body>

    <!-- #include virtual="/Site-Migration/Switch-Panel.html" -->

    <div id="div-page-container">

        <!-- #include virtual="/Pages/Headers/header.html" -->
        <!-- #include virtual="/Pages/Menus/menu.html" -->

        <div id="div-page-content">

            <h2>Migration Strategy</h2>

            <p>
                The Merchant's identity account in v1 legacy database needs 2 fields added (IsMigrated & v2TenantId).
            </p>

            <p>
                This application should have a repository with 2 data providers defined. 1 database (default) and 1 v2Services.
            </p>

            <p>
                When the page loads, it should check for Application("IsMigrated|v2TenantId") variable. If it's null, it should connect to the v1 database, lookup the Merchant record and find "IsMigrated" & "v2TenantId" then update the application variable accordingly.
            </p>

            <p>
                The repository should check the values in the app variable. If <b>!IsMigrated</b> but the v2TenantId is populated, the repo should still use the database provider.
            </p>

            <p>
                Once the data migration v1 => v2 is complete, the ETL process should call the MigrationService with v2TenantId which will update the Merchant's IsMigrated=true in v1 database and force a restart in the IIS site. This will trigger the site to read the null application variable, repopulate it from the db update and cause the repository to use the v2Services provider.
            </p>

            <p>
                Only when <b>IsMigrated</b> and v2TenantId is populated should the repo switch to the v2Services provider.
            </p>

            <p>

            </p>
            
        </div>
    </div>

</body>
</html>