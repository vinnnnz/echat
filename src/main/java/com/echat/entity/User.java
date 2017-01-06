package com.echat.entity;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User implements Serializable{

	private static final long serialVersionUID = 6327100289655419897L;

	@Id
	private String _id;
	
	private String displayName;
	
	private String email;
	
	private String country;
	
	private short age;
	
	private String password;
	
	private String profileImage;
	
	private List<String> blackListedProfiles;
	
	private List<String> friendList;

	/**
	 * @return the _id
	 */
	public String get_id() {
		return _id;
	}

	/**
	 * @param _id the _id to set
	 */
	public void set_id(String _id) {
		this._id = _id;
	}

	/**
	 * @return the displayName
	 */
	public String getDisplayName() {
		return displayName;
	}

	/**
	 * @param displayName the displayName to set
	 */
	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}

	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		this.country = country;
	}

	/**
	 * @return the age
	 */
	public short getAge() {
		return age;
	}

	/**
	 * @param age the age to set
	 */
	public void setAge(short age) {
		this.age = age;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the profileImage
	 */
	public String getProfileImage() {
		return profileImage;
	}

	/**
	 * @param profileImage the profileImage to set
	 */
	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}

	/**
	 * @return the blackListedProfiles
	 */
	public List<String> getBlackListedProfiles() {
		return blackListedProfiles;
	}

	/**
	 * @param blackListedProfiles the blackListedProfiles to set
	 */
	public void setBlackListedProfiles(List<String> blackListedProfiles) {
		this.blackListedProfiles = blackListedProfiles;
	}

	/**
	 * @return the friendList
	 */
	public List<String> getFriendList() {
		return friendList;
	}

	/**
	 * @param friendList the friendList to set
	 */
	public void setFriendList(List<String> friendList) {
		this.friendList = friendList;
	}
}
