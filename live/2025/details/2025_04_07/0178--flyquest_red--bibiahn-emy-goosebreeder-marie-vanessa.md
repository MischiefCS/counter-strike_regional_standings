### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, emy, GooseBreeder, marie, vanessa<br />
Global Rank: [178](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [50]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  593.1<br />
<br />
Final Rank Value (593.1) = Starting Rank Value (629.3) + Head To Head Adjustments (-36.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.138[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.3
- 400 + ( ( 0.111 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 629.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      392 | 2025-02-09 | Exceritus    | L   | 0.819      | -            | -                | -                | -         |   -16.91 | BiBiAhn, emy, GooseBreeder, marie, vanessa  |
|            4 |      439 | 2025-02-08 | InControl    | L   | 0.812      | -            | -                | -                | -         |   -13.65 | BiBiAhn, emy, GooseBreeder, marie, vanessa  |
|            3 |     1291 | 2024-11-23 | Eco Warriors | L   | 0.296      | -            | -                | -                | -         |    -3.01 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            2 |     1316 | 2024-11-22 | Fluxo Demons | L   | 0.290      | -            | -                | -                | -         |    -3.32 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |
|            1 |     1874 | 2024-10-18 | Aware Impact | W   | 0.060      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.64 | BiBiAhn, emy, GooseBreeder, Kaoday, vanessa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,217.22)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.304 | $4,000.00      | $1,217.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
