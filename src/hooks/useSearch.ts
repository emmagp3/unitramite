import { useState } from 'react';
import { SchoolCardProps } from '../../components/school_cards/school_card';

export default function useSearch(schools: SchoolCardProps[]) {
  const [filteredSchools, setFilteredSchools] = useState(schools);
  const [searchValue, setSearchValue] = useState('');

  const onClickSearchSchool = (query: string) => {
    if (!query || query.length === 0) {
      setFilteredSchools(schools);
      return;
    }

    const result = filteredSchools.filter(
      (school) =>
        school.name.toLowerCase().includes(query.toLowerCase()) ||
        school.id.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSchools(result);
  };

  const onChangeSearchValue = (event: any) => {
    const newValue = event?.target?.value;
    setSearchValue(newValue);
    onClickSearchSchool(newValue);
  };

  return {
    filteredSchools,
    onChangeSearchValue,
    onClickSearchSchool,
    searchValue,
  };
}
