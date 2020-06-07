package userservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import userservice.entity.User;

/**
 * This is basic implementation of JPA, but better use mybatis mapper
 * @author yinjason
 *
 */
public interface UserDao extends JpaRepository<User, Long> {

}