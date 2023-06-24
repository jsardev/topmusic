export type iTunesRSSEntryLabelValue = {
    label: string;
  };
  
  export type iTunesRSSEntryAttributesValue<A extends Record<string, unknown>> = {
    attributes: A;
  };
  
  export type iTunesRSSEntryLabelAndAttributesValue<
    A extends Record<string, unknown>
  > = iTunesRSSEntryLabelValue & iTunesRSSEntryAttributesValue<A>;