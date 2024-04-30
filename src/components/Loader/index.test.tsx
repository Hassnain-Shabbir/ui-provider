import React from "react";
import { render } from "@testing-library/react";
import {
  createRenderer as createShallowRenderer,
  ShallowRenderer,
} from "react-test-renderer/shallow";

import Component, { Props } from "./index";

describe("snapshot", () => {
  let renderer: ShallowRenderer;

  beforeEach(() => {
    renderer = createShallowRenderer();
  });
  afterEach(() => {
    renderer.unmount();
  });

  it("mount only", () => {
    renderer.render(<Component />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
  it("fullPage = true", () => {
    const props: Props = {
      fullPage: true,
    };
    const component = <Component {...props} />;

    renderer.render(component);
    expect(renderer.getRenderOutput()).toMatchSnapshot();

    const { container } = render(component);
    const obj = container.querySelector(".page-loader-wrapper");
    expect(obj).toBeDefined();
    expect(obj).not.toBeNull();
  });
  it("absolute = true", () => {
    const props: Props = {
      absolute: true,
    };
    const component = <Component {...props} />;
    renderer.render(component);
    expect(renderer.getRenderOutput()).toMatchSnapshot();

    const { container } = render(component);
    const obj = container.querySelector(".absolute");
    expect(obj).toBeDefined();
    expect(obj).not.toBeNull();
  });
});
