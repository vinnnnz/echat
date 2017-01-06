package com.echat.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

import com.echat.entity.User;

public interface UserRepository extends MongoRepository<User, String>, CrudRepository<User, String>{

	public User getBy_id(String _id);
}
