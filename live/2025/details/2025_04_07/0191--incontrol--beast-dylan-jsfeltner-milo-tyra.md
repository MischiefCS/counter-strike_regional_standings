### Roster Details<br />
Team Name: InControl<br />
Roster: Beast, DYLAN, jsfeltner, milo, TyRa<br />
Global Rank: [191](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [56]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  573.4<br />
<br />
Final Rank Value (573.4) = Starting Rank Value (589.0) + Head To Head Adjustments (-15.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.174[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 589.0
- 400 + ( ( 0.091 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 589.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      355 | 2025-02-10 | Exceritus      | L   | 0.826      | -            | -                | -                | -         |   -15.80 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|            4 |      391 | 2025-02-09 | Chill Guys     | L   | 0.819      | -            | -                | -                | -         |   -13.03 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|            3 |      439 | 2025-02-08 | FlyQuest RED   | W   | 0.812      | 0.143        | 0.005 (0.001)    | 0.005 (0.001)    | 0 (0.000) |    13.65 | Beast, DYLAN, jsfeltner, milo, TyRa   |
|            2 |     1969 | 2024-10-13 | FLUFFY AIMERS  | L   | 0.025      | -            | -                | -                | -         |    -0.26 | Andrew, DYLAN, jsfeltner, mason, TyRa |
|            1 |     1977 | 2024-10-12 | Fisher College | L   | 0.019      | -            | -                | -                | -         |    -0.24 | Andrew, DYLAN, jsfeltner, mason, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3.91)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      0.026 | $150.00        | $3.91           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
