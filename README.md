# 2020_FSD
Design document please refer here:

MileStone 4

1. estock-front

Anglar frontend project, calling FSDZuulGateway url for FSDCompanyService company inquiry/add.
FSDCompanyService internally will call FSDStockService to inquiry Stock information.
including below functions:
login
for Admin: company list/company creation
for User: compare company

2. estock-backend / FsdSpringCloudMicroService

Parent project.

3. estock-backend / FsdSpringCloudMicroService / Eureka_service

4. estock-backend / FsdSpringCloudMicroService / FSDZuulGateway

Gateway for service entry point.

5. estock-backend / FSDCompanyService

Provide MicroService for company inquiry/add.
Will call FSDStockService to inquiry Stock information

6. estock-backend / FSDStockService

Provide MicroService for Stock inquiry.
