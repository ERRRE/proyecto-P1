
let grafica1 = new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { years: 'Lun', value: 60 },// pasar la variable 
        { years: 'Mar', value: 10 },
        { years: 'Mier', value: 5 },
        { years: 'Jue', value: 5 },
        { years: 'Vie', value: 20 },
        { years: 'sab', value: 20 },
        { years: 'Dom', value: 20 },
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'years',
    //xLabels: "day",
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    postUnits: "%",
    ymax: 100,
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Ocupacion'],
    resize: true,
    // lineColors:
});