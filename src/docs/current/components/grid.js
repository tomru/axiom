import { breakpoints, gridGutters } from 'axiom/sass';
import { Grid, GridCell } from 'axiom/react';
import DemoBox from 'style-guide/components/DemoBox/DemoBox';

export default {
  id: 'grid',
  path: 'grid',
  group: 'components',
  components: [{
    Component: Grid,
    children: [{
      Component: GridCell,
    }],
  }],
  imports: {
    sass: ['components/grid'],
  },
  examples: () => [{
    title: 'Basic grid',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Grid,
      children: [{
        Component: GridCell,
        demoContent: true,
        children: [{
          Component: DemoBox,
          children: 'Fit / Full',
        }],
      }, {
        Component: GridCell,
        demoContent: true,
        children: [{
          Component: DemoBox,
          children: 'Fit / Full',
        }],
      }],
    }],
  }, {
    title: 'Gutter modifiers',
    snippetLocation: true,
    children: [{
      title: 'No vertical gutters',
      snippetContent: true,
      children: [{
        Component: Grid,
        demoContent: true,
        props: {
          vGutters: false,
        },
        children: [{
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: 'Fit / Full',
          }],
        }, {
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: 'Fit / Full',
          }],
        }],
      }],
    }, {
      title: 'No horizontal gutters',
      snippetContent: true,
      children: [{
        Component: Grid,
        demoContent: true,
        props: {
          hGutters: false,
        },
        children: [{
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: 'Fit / Full',
          }],
        }, {
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: 'Fit / Full',
          }],
        }],
      }],
    }, {
      title: 'No vertical or horizontal gutters',
      snippetContent: true,
      children: [{
        Component: Grid,
        demoContent: true,
        props: {
          gutters: false,
        },
        children: [{
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: 'Fit / Full',
          }],
        }, {
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: 'Fit / Full',
          }],
        }],
      }],
    }],
  }, {
    title: 'Gutter sizing modifiers',
    snippetLocation: true,
    snippetContent: true,
    children: gridGutters.map(({ id }) => {
      return {
        Component: Grid,
        demoContent: true,
        props: {
          gutters: id,
        },
        children: [{
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: `${id.toUpperCase()} Gutters`,
          }],
        }, {
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: `${id.toUpperCase()} Gutters`,
          }],
        }],
      };
    }),
  }, {
    title: 'Responsive suppressor',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Grid,
      demoContent: true,
      props: {
        responsive: false,
      },
      children: [{
        Component: GridCell,
        children: [{
          Component: DemoBox,
          children: 'Always fits',
        }],
      }, {
        Component: GridCell,
        children: [{
          Component: DemoBox,
          children: 'Always fits',
        }],
      }],
    }],
  }, {
    title: 'Flex sizing (grid level)',
    snippetLocation: true,
    snippetContent: true,
    children: [{
      Component: Grid,
      demoContent: true,
      props: {
        full: true,
      },
      children: [{
        Component: GridCell,
        children: [{
          Component: DemoBox,
          children: 'Full',
        }],
      }, {
        Component: GridCell,
        children: [{
          Component: DemoBox,
          children: 'Full',
        }],
      }],
    }, {
      Component: Grid,
      demoContent: true,
      props: {
        fit: true,
      },
      children: [{
        Component: GridCell,
        children: [{
          Component: DemoBox,
          children: 'Fit',
        }],
      }, {
        Component: GridCell,
        children: [{
          Component: DemoBox,
          children: 'Fit',
        }],
      }],
    }],
  }, {
    title: 'Responsive flex sizing (grid level)',
    children: [{
      type: 'tabset',
      children: breakpoints.map(({ id }) => {
        return {
          snippetLocation: true,
          props: {
            title: `Breakpoint ${id}`,
          },
          children: [{
            title: 'Full 100%',
            snippetContent: true,
            children: [{
              Component: Grid,
              demoContent: true,
              props: {
                full: id,
              },
              children: [{
                Component: GridCell,
                children: [{
                  Component: DemoBox,
                  children: `Full (> ${id})`,
                }],
              }, {
                Component: GridCell,
                children: [{
                  Component: DemoBox,
                  children: `Full (> ${id})`,
                }],
              }],
            }],
          }, {
            title: 'Fit',
            snippetContent: true,
            children: [{
              Component: Grid,
              demoContent: true,
              props: {
                fit: id,
              },
              children: [{
                Component: GridCell,
                children: [{
                  Component: DemoBox,
                  children: `Fit (> ${id})`,
                }],
              }, {
                Component: GridCell,
                children: [{
                  Component: DemoBox,
                  children: `Fit (> ${id})`,
                }],
              }],
            }],
          }],
        };
      }),
    }],
  }, {
    title: 'Flex sizing (cell level)',
    children: [{
      title: 'Full (100%)',
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: Grid,
        children: [{
          Component: GridCell,
          demoContent: true,
          props: {
            full: true,
          },
          children: [{
            Component: DemoBox,
            children: 'Full 100%',
            props: {
              attention: true,
            },
          }],
        }, {
          Component: GridCell,
          demoContent: true,
          children: [{
            Component: DemoBox,
            children: 'Auto',
          }],
        }],
      }],
    }, {
      title: 'Shrink (to contents)',
      snippetLocation: true,
      snippetContent: true,
      children: [{
        Component: Grid,
        children: [{
          Component: GridCell,
          demoContent: true,
          props: {
            shrink: true,
          },
          children: [{
            Component: DemoBox,
            children: 'Shrinks',
            props: {
              attention: true,
            },
          }],
        }, {
          Component: GridCell,
          demoContent: true,
          children: [{
            Component: DemoBox,
            children: 'Auto',
          }],
        }],
      }],
    }],
  }, {
    title: 'Responsive flex sizing (cell level)',
    children: [{
      type: 'tabset',
      children: breakpoints.map(({ id }) => {
        return {
          snippetLocation: true,
          props: {
            title: `Breakpoint ${id}`,
          },
          children: [{
            title: 'Full 100%',
            snippetContent: true,
            children: [{
              Component: Grid,
              children: [{
                Component: GridCell,
                demoContent: true,
                props: {
                  full: id,
                },
                children: [{
                  Component: DemoBox,
                  children: `Full (> ${id})`,
                  props: {
                    attention: true,
                  },
                }],
              }, {
                Component: GridCell,
                demoContent: true,
                children: [{
                  Component: DemoBox,
                  children: `Auto`,
                }],
              }],
            }],
          }, {
            title: 'Shrink',
            snippetContent: true,
            children: [{
              Component: Grid,
              children: [{
                Component: GridCell,
                demoContent: true,
                props: {
                  shrink: id,
                },
                children: [{
                  Component: DemoBox,
                  children: `Shrink (> ${id})`,
                  props: {
                    attention: true,
                  },
                }],
              }, {
                Component: GridCell,
                demoContent: true,
                children: [{
                  Component: DemoBox,
                  children: `Auto`,
                }],
              }],
            }],
          }],
        };
      }),
    }],
  }, {
    title: 'Standard 12 base cell sizing',
    snippetLocation: true,
    snippetContent: true,
    children: ['sixth', 'fifth', 'quarter', 'third', 'half'].map((size) => {
      return {
        Component: Grid,
        children: [{
          Component: GridCell,
          demoContent: true,
          props: {
            [size]: true,
          },
          children: [{
            Component: DemoBox,
            children: size,
            props: {
              attention: true,
            },
          }],
        }, {
          Component: GridCell,
          demoContent: true,
          children: [{
            Component: DemoBox,
            children: 'Auto',
          }],
        }],
      };
    }),
  }, {
    title: 'Responsive 12 base cell sizing',
    children: [{
      type: 'tabset',
      children: breakpoints.map(({ id }) => {
        return {
          snippetLocation: true,
          snippetContent: true,
          props: {
            title: `Breakpoint ${id}`,
          },
          children: ['sixth', 'fifth', 'quarter', 'third', 'half'].map((size) => {
            return {
              Component: Grid,
              children: [{
                Component: GridCell,
                demoContent: true,
                props: {
                  [size]: id,
                },
                children: [{
                  Component: DemoBox,
                  children: `${size} > ${id}`,
                  props: {
                    attention: true,
                  },
                }],
              }, {
                Component: GridCell,
                demoContent: true,
                children: [{
                  Component: DemoBox,
                  children: 'Auto',
                }],
              }],
            };
          }),
        };
      }),
    }],
  }, {
    title: 'Vertical cell alignment modifiers (Grid level)',
    snippetLocation: true,
    snippetContent: true,
    children: Grid.__ax_propTypes.vAlign.oneOf.map((vAlign) => {
      return {
        Component: Grid,
        demoContent: true,
        props: {
          vAlign: vAlign,
        },
        demoProps: {
          className: 'dm-demo-container',
        },
        children: [{
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: `${vAlign}`,
          }],
        }, {
          Component: GridCell,
          children: [{
            Component: DemoBox,
            children: `${vAlign}`,
          }],
        }],
      };
    }),
  }, {
    title: 'Vertical cell alignment modifiers (Cell level)',
    snippetLocation: true,
    children: [{
      Component: Grid,
      snippetContent: true,
      demoProps: {
        className: 'dm-demo-container',
      },
      children: GridCell.__ax_propTypes.vAlign.oneOf.map((vAlign) => {
        return {
          Component: GridCell,
          demoContent: true,
          props: {
            vAlign: vAlign,
          },
          children: [{
            Component: DemoBox,
            children: `${vAlign}`,
          }],
        };
      }),
    }],
  }, {
    title: 'Horizontal cell alignment modifiers',
    snippetLocation: true,
    snippetContent: true,
    children: Grid.__ax_propTypes.hAlign.oneOf.map((hAlign) => {
      return {
        Component: Grid,
        demoContent: true,
        props: {
          hAlign: hAlign,
        },
        children: [{
          Component: GridCell,
          props: {
            shrink: true,
          },
          children: [{
            Component: DemoBox,
            children: `${hAlign}`,
          }],
        }, {
          Component: GridCell,
          props: {
            shrink: true,
          },
          children: [{
            Component: DemoBox,
            children: `${hAlign}`,
          }],
        }, {
          Component: GridCell,
          props: {
            shrink: true,
          },
          children: [{
            Component: DemoBox,
            children: `${hAlign}`,
          }],
        }],
      };
    }),
  }],
};
