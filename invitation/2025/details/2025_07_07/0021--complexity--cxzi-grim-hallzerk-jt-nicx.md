### Roster Details<br />
Team Name: Complexity<br />
Roster: Cxzi, Grim, hallzerk, JT, nicx<br />
Global Rank: [21](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [5]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  1010.2<br />
<br />
Final Rank Value (1010.2) = Starting Rank Value (1011.9) + Head To Head Adjustments (-1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.528[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.190[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1011.9
- 400 + ( ( 0.248 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1011.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      182 | 2025-02-17 | SAW             | L   | 0.265      | -            | -                | -                | -         |    -0.81 | Cxzi, Grim, hallzerk, JT, nicx |
|            6 |      212 | 2025-02-16 | Imperial Female | W   | 0.257      | 1.000        | 0.088 (0.023)    | 0.000 (0.000)    | 1 (0.257) |     1.17 | Cxzi, Grim, hallzerk, JT, nicx |
|            5 |      248 | 2025-02-15 | Virtus.pro      | L   | 0.250      | -            | -                | -                | -         |    -0.28 | Cxzi, Grim, hallzerk, JT, nicx |
|            4 |      275 | 2025-02-14 | The MongolZ     | L   | 0.243      | -            | -                | -                | -         |    -0.09 | Cxzi, Grim, hallzerk, JT, nicx |
|            3 |      625 | 2025-01-31 | Team Liquid     | L   | 0.150      | -            | -                | -                | -         |    -1.57 | Cxzi, Grim, hallzerk, JT, nicx |
|            2 |      634 | 2025-01-29 | Eternal Fire    | L   | 0.138      | -            | -                | -                | -         |    -0.03 | Cxzi, Grim, hallzerk, JT, nicx |
|            1 |      683 | 2025-01-16 | Virtus.pro      | L   | 0.050      | -            | -                | -                | -         |    -0.05 | Cxzi, Grim, hallzerk, JT, nicx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,245.66)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $18,750.00     | $5,717.88       |
| 2025-02-09 |      0.211 | $2,500.00      | $527.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
