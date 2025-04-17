class CuentaBancaria {
  private titular: string;
  private saldo: number;

  constructor(titular: string, saldoInicial: number = 0) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  depositar(monto: number): void {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Depósito exitoso. Nuevo saldo: $${this.saldo}`);
    } else {
      console.log("El monto a depositar debe ser mayor que cero.");
    }
  }

  retirar(monto: number): void {
    if (monto > this.saldo) {
      console.log("Fondos insuficientes.");
    } else if (monto <= 0) {
      console.log("El monto a retirar debe ser mayor que cero.");
    } else {
      this.saldo -= monto;
      console.log(`Retiro exitoso. Nuevo saldo: $${this.saldo}`);
    }
  }

  consultarSaldo(): void {
    console.log(`El saldo actual de ${this.titular} es $${this.saldo}`);
  }
}

const miCuenta = new CuentaBancaria("Steven", 100);
miCuenta.consultarSaldo();
miCuenta.depositar(50);
miCuenta.retirar(30);
miCuenta.retirar(200);