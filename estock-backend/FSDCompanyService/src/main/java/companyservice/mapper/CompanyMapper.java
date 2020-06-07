package companyservice.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import companyservice.entity.Company;

@Mapper
public interface CompanyMapper {
	@Select("select * from user where name like '%#{value}%'")
	public List<Company> findUserByName(String name);

	@Insert("insert into user (name, age, password, role) values(#{name},#{age},#{password},#{role})")
	void insertUser(Company user);
	void updateUserById(Company user);
	Company getUserById(int id);
	void deleteUserById(int id);
	
	/**
	<insert id="insertUser" parameterType="Company">
		insert into user (name, age) values(#{name},#{age})
	</insert>
	<select id="getAllUsers" resultType="Company">
		select id,name,age from user
	</select>
	<select id="updateUserById" parameterType="Company">
		update user set name=#{name},age=#{age} where id=#{id}
	</select>
	<select id="getUserById" resultType="Company">
		select id,name,age from user where id= #{id}
	</select>
	<delete id="deleteUserById">
		delete from user where id = #{id}
	 */
}
