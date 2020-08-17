import { renderHook, act } from '@testing-library/react-hooks';
import useApiCall from './useApiCall';

describe('useApiCall()', () => {
  test('axios.get method test', async () => {
    const { result } = renderHook(() => useApiCall());
    const { get } = result.current;
    await act(async () => {
      const result = await get('http://localhost:8000/api/test');
      console.log(result);
    });
  });
});