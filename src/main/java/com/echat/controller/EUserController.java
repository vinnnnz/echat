package com.echat.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.echat.entity.User;
import com.echat.repository.UserRepository;
import com.echat.util.Encryptor;
import com.google.gson.Gson;

@Controller
public class EUserController {
	
	private final String CONTENT_TYPE = "application/json";
	
	@Autowired
	private UserRepository userRepository;

	@RequestMapping(value="/")
	public String index(Model model) {
		
		return "index";
	}
	
	@RequestMapping(value="/chat")
	public String chat(Model model) {
		
		return "chat";
	}
	
	@RequestMapping(value="/registration")
	public String registration(Model model) {
		
		return "register";
	}
	
	@RequestMapping(value="/user")
	public void getAllUsers(HttpServletRequest request, HttpServletResponse response) {
		
		response.setContentType(CONTENT_TYPE);
		try {
			
			Gson json = new Gson();
			
			PrintWriter out = response.getWriter();
			out.print(json.toJson(userRepository.getBy_id(request.getParameter("userid"))));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	

	@RequestMapping(value="/register", headers = "content-type=multipart/*", method=RequestMethod.POST)
	public void createUserProfile(MultipartHttpServletRequest request, HttpServletResponse response) throws IOException {
	
		try {
			
			String profileImage = "";
			
			for(String fileName: request.getFileMap().keySet()) {
				
				 MultipartFile multiFile = request.getFile(fileName);
				 
				 profileImage = Base64.getEncoder().encodeToString(multiFile.getBytes());
			}
			
			String displayName = request.getParameter("displayName");
			
			String userID = request.getParameter("userID");

			String email = request.getParameter("email");
			
			short age = Short.valueOf(request.getParameter("age"));
			
			String country = request.getParameter("country");
			
			String password = Encryptor.getInstance().encrypt(request.getParameter("password"));
			
			// New User is about to create
			User user = new User();
			
			user.set_id(userID);
			user.setDisplayName(displayName);
			user.setAge(age);
			user.setCountry(country);
			user.setEmail(email);
			user.setPassword(password);
			user.setProfileImage(profileImage);
			
			userRepository.save(user);
			
		} catch (InvalidKeyException | NoSuchAlgorithmException | NoSuchPaddingException | IllegalBlockSizeException | BadPaddingException e) {

			e.printStackTrace();
		}  		
	}
}
