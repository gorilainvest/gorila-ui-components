import { FormGroup } from '@angular/forms';
export declare class GdkImportComponent {
    moduleNameStr: string;
    moduleTitle: string;
    /**
     * The name of module separeted by hyphen without module prefix
     * E.G. CardContainerModule send card-container as input but not gorilainvest-card-container.
     * the prefix you must sent in the prefix input
     */
    moduleName: any;
    /**
     * The prefix input. Can be gorilainvest, gro, gor, etc
     */
    prefix: string;
    keys: string[];
    values: {
        [s: string]: any;
    };
    /**
     * A form group where the keys are the component input names and
     * the values are the component input values.
     * (see currency-display into shell/layout/src/lib/ui folder)
     */
    form: FormGroup;
}
