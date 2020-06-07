package companyservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import companyservice.entity.Company;

/**
 * This is basic implementation of JPA, but better use mybatis mapper
 * @author yinjason
 *
 */
public interface CompanyDao extends JpaRepository<Company, Long> {

}