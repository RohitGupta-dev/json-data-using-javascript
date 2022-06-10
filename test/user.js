var user = {
    fields: {},
    data: [],
    buttons: [

    ],
    canEdit: true,
    canDelete: true,
    init: () => {
        user.createbuttons();
        user.getusersfromdatabase();
    },
    createbuttons:()=>{
        user.canEdit &&
            user.buttons.push({
                label: 'Edit', action: () => {
                    alert("Edit");

                }
            });
        user.canDelete &&
            user.buttons.push({
                label: 'Delete', action: () => {
                    alert("Delete");

                }
            });
    },
    getusersfromdatabase: () => {
        $.get('data.json', (data) => {
            user.fields = data.user.fields;
            user.data = data.user.data;
            user.binddbresponse();
        });
    },
    binddbresponse: () => {
        $.get('grid/grid.html', (data) => {
            $('.table-container').html(data);
            grid.bindheading(user.fields);
            grid.binddata(user.fields, user.data, user.buttons);
        })
    }



}