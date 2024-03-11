function CountFunction(){

    let R = document.getElementById("R").value; 
    let w = document.getElementById("w").value; 
    let B = document.getElementById("B").value; 

    //все единицы измерения в  СИ
    let t = [];
    let E = [];
    let I = [];

    //w = 5
    for(let i = 0; i < 5*2*Math.PI/w; i+=5*2*Math.PI/w/300)
    {
        t.push(i);
        E.push(B*w*Math.cos(w*i));
        I.push(B*w*Math.cos(w*i)/R);
    }

    let layout_1 = {
        title: 'График ε(t)',
        xaxis: {
            title: 'Время t (c)'
        },
        yaxis: {
            title: 'ε(t), В'
        }
    };

    let layout_2 = {
        title: 'График I(t)',
        xaxis: {
            title: 'Время t (c)'
        },
        yaxis: {
            title: 'I(t), А'
        }
    };

    Plotly.newPlot(
        "myDiv_1",
        [{
            mode: 'lines',
            type: 'scatter',
            x: t,
            y: E,
        }],
        layout_1
    );

    Plotly.newPlot(
        "myDiv_2",
        [{
            mode: 'lines',
            type: 'scatter',
            x: t,
            y: I,
        }],
        layout_2
    );

    return false;
}
