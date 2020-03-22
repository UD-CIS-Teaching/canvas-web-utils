export function startDialog(title: string) {
    if ($('#dialog').length == 0) {
        $(document.body).append('<div title="' + title +
            '" id="dialog"></div>');
    }
    $("#dialog").dialog({
        autoOpen: false,
        show: "blind",
        hide: "explode",
        width: '80%',
        height: document.documentElement.clientHeight - 100
    });
    $("#dialog").dialog("open");
    $('#dialog').html("<span>Loading, please wait.</span>");

}

export function loadDialog(data: any) {
    $('#dialog').html(data);
}
