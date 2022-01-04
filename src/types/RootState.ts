import { GithubRepoFormState } from 'app/pages/HomePage/Features/GithubRepoForm/slice/types';
import { ThemeState } from 'styles/theme/slice/types';
import { DebugState } from '../types/interfaceState';

export interface RootState {
  theme?: ThemeState;
  githubRepoForm?: GithubRepoFormState;
  debug?: DebugState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
