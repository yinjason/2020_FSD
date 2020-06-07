package userservice.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import userservice.entity.User;

@Mapper
public interface UserMapper {
	@Select("select * from user where name like '%#{value}%'")
	public List<User> findUserByName(String name);

	@Insert("insert into user (name, age, password, role) values(#{name},#{age},#{password},#{role})")
	void insertUser(User user);
	void updateUserById(User user);
	User getUserById(int id);
	void deleteUserById(int id);
	
	/**
	<insert id="insertUser" parameterType="User">
		insert into user (name, age) values(#{name},#{age})
	</insert>
	<select id="getAllUsers" resultType="User">
		select id,name,age from user
	</select>
	<select id="updateUserById" parameterType="User">
		update user set name=#{name},age=#{age} where id=#{id}
	</select>
	<select id="getUserById" resultType="User">
		select id,name,age from user where id= #{id}
	</select>
	<delete id="deleteUserById">
		delete from user where id = #{id}
	 */
}
