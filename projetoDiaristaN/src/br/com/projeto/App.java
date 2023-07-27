package br.com.projeto;

import br.com.classes.Atendimento;
import br.com.classes.Cliente;
import br.com.classes.Diarista;

public class App {

	public static void main(String[] args) {
		
		Diarista diarista = new Diarista();
		
		diarista.setNome("joao");
		diarista.setTelefone("(11) 98751-9885");
		diarista.setEndereço("Av Cajamar, N 111");
		diarista.setChavePix("150");
		
		//valor na conta diarista
		System.out.println("SALDO DIARISTA:" + diarista.getSaldo());
		diarista.depositar(30);
		System.out.println("NOVO SALDO:" + diarista.getSaldo());
		
		System.out.println("SALDO DIARISTA:" + diarista.getSaldo());
		diarista.sacar(10);
		System.out.println("NOVO SALDO:" + diarista.getSaldo());
		
		System.out.println("==================================");
		
		
		System.out.println("NOME DIARISTA:" + diarista.getNome());
		System.out.println("TELEFONE DIARISTA:" + diarista.getTelefone());
		System.out.println("ENDEREÇO DIARISTA:" + diarista.getEndereço());
		System.out.println("CHAVE PIX DIARISTA:" + diarista.getChavePix());
		diarista.atender("Jóse🤷‍♂️");
		
		
		System.out.println("==================================");
		
		Cliente cliente = new Cliente();
		
		cliente.setNome("josé");
		cliente.setTelefone("(11) 98557-6247");
		cliente.setEndereço("Av Cajamar, N 501");	
		//valor na conta cliente
		System.out.println("SALDO CLIENETE:" + cliente.getSaldo());
		cliente.depositar(30);
		System.out.println("NOVO SALDO:" + cliente.getSaldo());
		
		System.out.println("SALDO CLIENETE:" + cliente.getSaldo());
		cliente.sacar(10);
		System.out.println("NOVO SALDO:" + cliente.getSaldo());
		
		
		System.out.println("==================================");
		
		
		System.out.println("NOME CLIENTE:" + cliente.getNome());
		System.out.println("TELEFONE CLIENTE:" + cliente.getTelefone());
		System.out.println("ENDEREÇO CLIENETE:" + cliente.getEndereço());
		
		System.out.println("==================================");
		
		Atendimento atendimento = new Atendimento();
		
		atendimento.setHoras(10); 
		System.out.println( atendimento.getHoras());

		

		
	}

}
