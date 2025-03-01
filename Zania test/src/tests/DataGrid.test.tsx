import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import DataGrid from '../DataGridComponent';
import {sampleData} from '../sampleData';

describe('DataGrid component', () => {

  it('renders data grid with sample data', () => {
    const { getByText } = render(<DataGrid/>);
    sampleData.forEach((item) => {
      expect(getByText(item.name)).toBeInTheDocument();
      expect(getByText(item.device)).toBeInTheDocument();
      expect(getByText(item.path)).toBeInTheDocument();
      expect(getByText(item.status)).toBeInTheDocument();
    });
  });

  it('renders select all checkbox', () => {
    const { getByRole } = render(<DataGrid />);
    const selectAllCheckbox = getByRole('checkbox');
    expect(selectAllCheckbox).toBeInTheDocument();
  });

  it('toggles select all checkbox', () => {
    const { getByRole } = render(<DataGrid />);
    const selectAllCheckbox = getByRole('checkbox');
    fireEvent.click(selectAllCheckbox);
    expect(selectAllCheckbox).toBeChecked();
  });

  it('renders download button', () => {
    const { getByText } = render(<DataGrid />);
    const downloadButton = getByText('Download Selected');
    expect(downloadButton).toBeInTheDocument();
  });

  it('disables download button when no items are selected', () => {
    const { getByText } = render(<DataGrid />);
    const downloadButton = getByText('Download Selected');
    expect(downloadButton).toBeDisabled();
  });

  it('enables download button when items are selected', () => {
    const { getByText, getByRole } = render(<DataGrid />);
    const selectAllCheckbox = getByRole('checkbox');
    fireEvent.click(selectAllCheckbox);
    const downloadButton = getByText('Download Selected');
    expect(downloadButton).not.toBeDisabled();
  });

  it('downloads selected items when button is clicked', () => {
    const { getByText, getByRole } = render(<DataGrid />);
    const selectAllCheckbox = getByRole('checkbox');
    fireEvent.click(selectAllCheckbox);
    const downloadButton = getByText('Download Selected');
    fireEvent.click(downloadButton);
    // verify that the download functionality works as expected
  });
});