import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import { INLINES, type Document } from "@contentful/rich-text-types";

const options = {
  preserveWhitespace: true,
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a href={node.data.uri} target="_blank">
          {children}
        </a>
      );
    },
  },
} as Options;

export const ContentfulRichtext = ({
  richText,
  className,
}: {
  richText?: Document;
  className?: string;
}) => {
  if (!richText) return null;

  return (
    <div className={className}>
      {documentToReactComponents(richText, options)}
    </div>
  );
};
