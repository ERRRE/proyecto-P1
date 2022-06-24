function generarGraficoOcupacion(array) {
   let total = array.cupos;
   let ocupacion = 0;
   array.reservas.forEach(function (reserva) {
      ocupacion += reserva.cupos;
      total += reserva.cupos;
   });
   let grafica2 = new Morris.Donut({
      // ID of the element in which to draw the chart.
      element: 'myfirstchart2',
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: [
         { label: 'Disponibles', value: total - ocupacion },
         { label: "Total cupos", value: total },
      ],
      // The name of the data record attribute that contains x-values.
      xkey: 'year',
      // A list of names of data record attributes that contain y-values.
      ykeys: ['value'],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ['Estrellas']
   });
}
// generarGraficoOcupacion(50, 20)
// cupos total o maximo / de todas las reservas de este local el conteo acumulativo de lo cupos 