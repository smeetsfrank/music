type Props = {
  [key: string]: string;
};

export default function getParamValues(url: string): Props {
  return url
    .slice(1)
    .split('&')
    .reduce((prev: any, curr: any) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
}
