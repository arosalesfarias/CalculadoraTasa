const DIAS_ANIO = 365

class CalcTasa{
    constructor(){
        this.tna = 0
        this.periodo = 0
        this.tea = 0
    }
    calcularTEA(){
        this.tea = this.decimalAPorcentaje(Math.pow(this.porcentajeADecimal(this.tasaEfectivaPorPeriodo()),this.periodosDeCapitalizacion()))
    }
    tasaEfectivaPorPeriodo(){
        return ((this.tna/DIAS_ANIO)*this.periodo)
    }
    periodosDeCapitalizacion(){
        return DIAS_ANIO/this.periodo
    }
    porcentajeADecimal(tasa){
        return (tasa*0.01)+1 // Ejemplo: 27 a 1.27
    }
    decimalAPorcentaje(tasa){
        return (tasa-1)*100 // Ejemplo : 1.27 a 27
    }
}