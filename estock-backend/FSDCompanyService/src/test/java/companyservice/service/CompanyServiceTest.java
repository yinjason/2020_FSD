package companyservice.service;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import companyservice.dao.CompanyDao;
import companyservice.entity.Company;
import companyservice.service.CompanyService;
import companyservice.service.CompanyServiceImpl;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SpringBootTest
public class CompanyServiceTest {

	@InjectMocks
	private CompanyService cs = new CompanyServiceImpl();
	
	@Mock
	private CompanyDao companyDao;
	
	@Before
	public void init() {
		MockitoAnnotations.initMocks(this.getClass());
		//when(companyDao.deleteAll())
		assert(true);
	}
	
	@Test
	public void testCreateCompany() {
	}
}
