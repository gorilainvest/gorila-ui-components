export interface InfoBox {
  title?: string;
  arrow?: boolean;
  value?: number;
  smallerValue?: boolean;
  dateValue?: string;
  longDateValue?: {
    begin: string;
    dateJoin: string;
    end: string;
  };
  volatility?: number;
  sharpe?: number;
  subtitle?: string;
}
