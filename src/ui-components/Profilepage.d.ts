/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfilepageOverridesProps = {
    Profilepage?: PrimitiveOverrideProps<ViewProps>;
    "Profile Page"?: PrimitiveOverrideProps<ViewProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    YUM?: PrimitiveOverrideProps<TextProps>;
    "Edit Profile"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    ProfileCard?: PrimitiveOverrideProps<FlexProps>;
    Followers?: PrimitiveOverrideProps<FlexProps>;
    MyIcon4074766?: PrimitiveOverrideProps<ViewProps>;
    "99 Followers"?: PrimitiveOverrideProps<TextProps>;
    MyIcon4074768?: PrimitiveOverrideProps<ViewProps>;
    Alert4074769?: PrimitiveOverrideProps<FlexProps>;
    Alert4074770?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ProfilepageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfilepageOverridesProps | undefined | null;
}>;
export default function Profilepage(props: ProfilepageProps): React.ReactElement;
