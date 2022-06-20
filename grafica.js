
let grafica1 = new Morris.Bar({
 // ID of the element in which to draw the chart.
 element: 'myfirstchart',
 // Chart data records -- each entry in this array corresponds to a point on
 // the chart.
 data: [
   { year: '1', value: 90 },
   { year: '2', value: 45 },
   { year: '3', value: 17 },
   { year: '4', value: 22 },
   { year: '5', value: 77 }
 ],
 // The name of the data record attribute that contains x-values.
 xkey: 'year',
 // A list of names of data record attributes that contain y-values.
 ykeys: ['value'],
 postUnits: "%",
 ymax: 100,
 // Labels for the ykeys -- will be displayed when you hover over the
 // chart.
 labels: ['Estrellas']
});


let grafica2 =  new Morris.Donut({
 // ID of the element in which to draw the chart.
 element: 'myfirstchart2',
 // Chart data records -- each entry in this array corresponds to a point on
 // the chart.
 data: [
     { year: '5', value: 77 },
     { year: '5', value: 100 },
 ],
 // The name of the data record attribute that contains x-values.
 xkey: 'year',
 // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
 // Labels for the ykeys -- will be displayed when you hover over the
 // chart.
 labels: ['Estrellas']
});