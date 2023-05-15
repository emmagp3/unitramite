import School from './stores/school.model';
import PaperWork from './stores/paperwork.model';
import { SchoolCardProps } from '../components/school_cards/school_card';

const state = {
  schools: Array<School>(),
};

const initStore = () => {
  const schools = [
    new School(
      'Escuela 1',
      'Adipisicing occaecat ullamco anim nostrud exercitation velit. Duis aliquip duis ullamco velit cillum id esse qui eiusmod nisi do amet. Eu consequat laborum dolor eiusmod est cillum ullamco esse laborum officia nisi eiusmod. In eiusmod exercitation cillum in et tempor reprehenderit magna velit ad nostrud aute eu. Cupidatat irure do adipisicing veniam esse et ullamco qui nostrud aliqua sint pariatur.In exercitation proident anim occaecat veniam ex nulla est dolor est tempor irure. Voluptate ad fugiat ut ut ex aute tempor voluptate in occaecat amet exercitation nulla. Esse ipsum cillum nisi duis nostrud. Non quis exercitation proident ut officia incididunt. Velit nisi nostrud amet reprehenderit ex nostrud.',
      'Dirección 3',
      [
        new PaperWork('Trámite 1', 'Descripción 1', 'Documentos 1'),
        new PaperWork('Trámite 2', 'Descripción 2', 'Documentos 2'),
        new PaperWork('Trámite 3', 'Descripción 3', 'Documentos 3'),
      ]
    ),
    new School(
      'Escuela 2',
      'Adipisicing occaecat ullamco anim nostrud exercitation velit. Duis aliquip duis ullamco velit cillum id esse qui eiusmod nisi do amet. Eu consequat laborum dolor eiusmod est cillum ullamco esse laborum officia nisi eiusmod. In eiusmod exercitation cillum in et tempor reprehenderit magna velit ad nostrud aute eu. Cupidatat irure do adipisicing veniam esse et ullamco qui nostrud aliqua sint pariatur.In exercitation proident anim occaecat veniam ex nulla est dolor est tempor irure. Voluptate ad fugiat ut ut ex aute tempor voluptate in occaecat amet exercitation nulla. Esse ipsum cillum nisi duis nostrud. Non quis exercitation proident ut officia incididunt. Velit nisi nostrud amet reprehenderit ex nostrud.',
      'Dirección 3',
      [
        new PaperWork('Trámite 1', 'Descripción 1', 'Documentos 1'),
        new PaperWork('Trámite 2', 'Descripción 2', 'Documentos 2'),
        new PaperWork('Trámite 3', 'Descripción 3', 'Documentos 3'),
      ]
    ),
    new School(
      'Escuela 3',
      'Adipisicing occaecat ullamco anim nostrud exercitation velit. Duis aliquip duis ullamco velit cillum id esse qui eiusmod nisi do amet. Eu consequat laborum dolor eiusmod est cillum ullamco esse laborum officia nisi eiusmod. In eiusmod exercitation cillum in et tempor reprehenderit magna velit ad nostrud aute eu. Cupidatat irure do adipisicing veniam esse et ullamco qui nostrud aliqua sint pariatur.In exercitation proident anim occaecat veniam ex nulla est dolor est tempor irure. Voluptate ad fugiat ut ut ex aute tempor voluptate in occaecat amet exercitation nulla. Esse ipsum cillum nisi duis nostrud. Non quis exercitation proident ut officia incididunt. Velit nisi nostrud amet reprehenderit ex nostrud.',
      'Dirección 3',
      [
        new PaperWork('Trámite 1', 'Descripción 1', 'Documentos 1'),
        new PaperWork('Trámite 2', 'Descripción 2', 'Documentos 2'),
        new PaperWork('Trámite 3', 'Descripción 3', 'Documentos 3'),
      ]
    ),
    new School(
      'Escuela 4',
      'Adipisicing occaecat ullamco anim nostrud exercitation velit. Duis aliquip duis ullamco velit cillum id esse qui eiusmod nisi do amet. Eu consequat laborum dolor eiusmod est cillum ullamco esse laborum officia nisi eiusmod. In eiusmod exercitation cillum in et tempor reprehenderit magna velit ad nostrud aute eu. Cupidatat irure do adipisicing veniam esse et ullamco qui nostrud aliqua sint pariatur.In exercitation proident anim occaecat veniam ex nulla est dolor est tempor irure. Voluptate ad fugiat ut ut ex aute tempor voluptate in occaecat amet exercitation nulla. Esse ipsum cillum nisi duis nostrud. Non quis exercitation proident ut officia incididunt. Velit nisi nostrud amet reprehenderit ex nostrud.',
      'Dirección 3',
      [
        new PaperWork('Trámite 1', 'Descripción 1', 'Documentos 1'),
        new PaperWork('Trámite 2', 'Descripción 2', 'Documentos 2'),
        new PaperWork('Trámite 3', 'Descripción 3', 'Documentos 3'),
      ]
    ),
    new School(
      'Escuela 5',
      'Adipisicing occaecat ullamco anim nostrud exercitation velit. Duis aliquip duis ullamco velit cillum id esse qui eiusmod nisi do amet. Eu consequat laborum dolor eiusmod est cillum ullamco esse laborum officia nisi eiusmod. In eiusmod exercitation cillum in et tempor reprehenderit magna velit ad nostrud aute eu. Cupidatat irure do adipisicing veniam esse et ullamco qui nostrud aliqua sint pariatur.In exercitation proident anim occaecat veniam ex nulla est dolor est tempor irure. Voluptate ad fugiat ut ut ex aute tempor voluptate in occaecat amet exercitation nulla. Esse ipsum cillum nisi duis nostrud. Non quis exercitation proident ut officia incididunt. Velit nisi nostrud amet reprehenderit ex nostrud.',
      'Dirección 3',
      [
        new PaperWork('Trámite 1', 'Descripción 1', 'Documentos 1'),
        new PaperWork('Trámite 2', 'Descripción 2', 'Documentos 2'),
        new PaperWork('Trámite 3', 'Descripción 3', 'Documentos 3'),
      ]
    ),
    new School(
      'Escuela 6',
      'Adipisicing occaecat ullamco anim nostrud exercitation velit. Duis aliquip duis ullamco velit cillum id esse qui eiusmod nisi do amet. Eu consequat laborum dolor eiusmod est cillum ullamco esse laborum officia nisi eiusmod. In eiusmod exercitation cillum in et tempor reprehenderit magna velit ad nostrud aute eu. Cupidatat irure do adipisicing veniam esse et ullamco qui nostrud aliqua sint pariatur.In exercitation proident anim occaecat veniam ex nulla est dolor est tempor irure. Voluptate ad fugiat ut ut ex aute tempor voluptate in occaecat amet exercitation nulla. Esse ipsum cillum nisi duis nostrud. Non quis exercitation proident ut officia incididunt. Velit nisi nostrud amet reprehenderit ex nostrud.',
      'Dirección 3',
      [
        new PaperWork('Trámite 1', 'Descripción 1', 'Documentos 1'),
        new PaperWork('Trámite 2', 'Descripción 2', 'Documentos 2'),
        new PaperWork('Trámite 3', 'Descripción 3', 'Documentos 3'),
      ]
    ),
    new School(
      'Escuela 7',
      'Adipisicing occaecat ullamco anim nostrud exercitation velit. Duis aliquip duis ullamco velit cillum id esse qui eiusmod nisi do amet. Eu consequat laborum dolor eiusmod est cillum ullamco esse laborum officia nisi eiusmod. In eiusmod exercitation cillum in et tempor reprehenderit magna velit ad nostrud aute eu. Cupidatat irure do adipisicing veniam esse et ullamco qui nostrud aliqua sint pariatur.In exercitation proident anim occaecat veniam ex nulla est dolor est tempor irure. Voluptate ad fugiat ut ut ex aute tempor voluptate in occaecat amet exercitation nulla. Esse ipsum cillum nisi duis nostrud. Non quis exercitation proident ut officia incididunt. Velit nisi nostrud amet reprehenderit ex nostrud.',
      'Dirección 3',
      [
        new PaperWork('Trámite 1', 'Descripción 1', 'Documentos 1'),
        new PaperWork('Trámite 2', 'Descripción 2', 'Documentos 2'),
        new PaperWork('Trámite 3', 'Descripción 3', 'Documentos 3'),
      ]
    ),
  ];
  state.schools = schools;
};

const getSchoolsCardProps = (): SchoolCardProps[] => {
  return state.schools.map((school) => {
    const { id, name, description, logo: src } = school;
    return { id, name, description, src };
  });
};

const getSchoolData = (id: string) => {
  const result = state.schools.find((school) => school.id === id);
  if (!result) return;
  return result.makeGeneric();
};

const getSchoolsPaths = () => {
  return state.schools.map((school) => {
    return {
      params: {
        id: school.id,
      },
    };
  });
};

export default {
  initStore,
  getSchoolsCardProps,
  getSchoolsPaths,
  getSchoolData,
};
