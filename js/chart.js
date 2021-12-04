//data covid provinsi
var xmlhttp = new XMLHttpRequest();
var url = "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        var provinsi = data.map(function(elem) {
            return elem.provinsi;
        });
        //console.log(all)
        var kasus = data.map(function(elem) {
            return elem.kasus;
        });
        //console.log(kasus);
        var kematian = data.map(function(elem) {
            return elem.meninggal;
        });

        const ctx = document.getElementById('chart-line').getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'line',
        data: {
        labels: provinsi,
        datasets: [{
            label: 'Kasus Covid',
            data: kasus,
            backgroundColor: 'transparent',
            borderColor: 'grey',
            borderWidth: 2
        },
        {
            label: 'Kematian',
            data: kematian,
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 2
        }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                elements:{
                    line:{
                        tension:0
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}

//data covid provinsi
var xmlhttp = new XMLHttpRequest();
var url = "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        var provinsi = data.map(function(elem) {
            return elem.provinsi;
        });
        //console.log(all)
        var kasus = data.map(function(elem) {
            return elem.kasus;
        });
        //console.log(kasus);
        var kematian = data.map(function(elem) {
            return elem.meninggal;
        });

        const ctx = document.getElementById('chart-bar').getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: provinsi,
        datasets: [{
            label: 'Kasus Covid',
            data: kasus,
            backgroundColor: 'grey',
            borderColor: 'grey',
            borderWidth: 1
        },
        {
            label: 'Kematian',
            data: kematian,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1
        }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                elements:{
                    line:{
                        tension:0
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}


