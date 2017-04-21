import { DockerMultiStageNgPage } from './app.po';

describe('docker-multi-stage-ng App', () => {
  let page: DockerMultiStageNgPage;

  beforeEach(() => {
    page = new DockerMultiStageNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
