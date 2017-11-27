const DIAS_ANIO = 365

class CalcTasa{
    constructor(){
        this.tna = 0
        this.periodo = 0
        this.tea = 0
    }
    calcularTEA(){
        this.tea = (this.tasaEfectivaPorPeriodo()*0.01+1)^this.periodosDeCapitalizacion()
    }
    tasaEfectivaPorPeriodo(){
        return (this.tna/DIAS_ANIO)*this.periodo
    }
    periodosDeCapitalizacion(){
        return DIAS_ANIO/this.periodo
    }
}