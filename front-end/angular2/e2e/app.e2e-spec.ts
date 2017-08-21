import { StudentPortalClientPage } from './app.po';

describe('student-portal-client App', function() {
  let page: StudentPortalClientPage;

  beforeEach(() => {
    page = new StudentPortalClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
