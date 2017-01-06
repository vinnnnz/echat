package com.echat.util;

import java.security.InvalidKeyException;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;

public class Encryptor {

	private static Encryptor INSTANCE;

	public static Encryptor getInstance() {
		return INSTANCE == null ? INSTANCE = new Encryptor() : INSTANCE;
	}

	private String eightBitBinary(String plainText) {

		byte[] bytes = plainText.getBytes();
		StringBuilder sb = new StringBuilder();
		for (byte b : bytes) {
			int value = b;
			for (int i = 0; i < 8; i++) {
				sb.append((value & 128) == 0 ? 0 : 1);
				value <<= 1;
			}

			sb.append(" ");
		}

		return sb.toString();
	}

	public String encrypt(String plainText) throws NoSuchAlgorithmException,
			NoSuchPaddingException, InvalidKeyException,
			IllegalBlockSizeException, BadPaddingException {

		String binaryText = eightBitBinary(plainText);
		Cipher cipher = Cipher.getInstance("AES");
		cipher.init(Cipher.ENCRYPT_MODE, generateKey());
		byte[] mutated = cipher.doFinal(binaryText.getBytes());

		Base64.Encoder encoder = Base64.getEncoder();

		return encoder.encodeToString(mutated);
	}

	public String decrypt(String cipherText) throws InvalidKeyException,
			NoSuchAlgorithmException, NoSuchPaddingException,
			IllegalBlockSizeException, BadPaddingException {
		
		Cipher cipher = Cipher.getInstance("AES");
		cipher.init(Cipher.DECRYPT_MODE, generateKey());
		
		Base64.Decoder decoder = Base64.getDecoder();
		byte[] decodedText = decoder.decode(cipherText.getBytes());
		byte[] eightBitText = cipher.doFinal(decodedText);
		
		return eightBitBinaryToString(new String(eightBitText));
	}

	private String eightBitBinaryToString(String eightBit) {
		
		StringBuilder sb = new StringBuilder();
		String[] blocks = eightBit.split(" ");
		for (String block : blocks) {
			
			int blockValue = Integer.parseInt(block, 2);
			sb.append((char) blockValue);
		}

		return sb.toString();
	}

	private Key generateKey() {
		
		final byte[] k = new byte[] { 's', 'o', 'r', 'r', 'y', 'f', 'o', 'r',
				'c', 'o', 'd', 'i', 'n', 'g', '/', '/' };
		Key key = new SecretKeySpec(k, "AES");

		return key;
	}

}
