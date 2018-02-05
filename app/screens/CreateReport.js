import React from 'react';

import Container from '../components/common/Container';
import CreateReportForm from '../components/CreateReportForm';

const CreateReport = () => (
  <Container>
    <CreateReportForm />
  </Container>
);

CreateReport.navigationOptions = {
  headerTitle: 'Criar Relato',
};

export default CreateReport;
