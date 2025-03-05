### Roster Details<br />
Team Name: St4rboys<br />
Roster: Ang3l10wow, Bloody, hf, pavast4r, Sharpshooter<br />
Global Rank: [190](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [23]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  643.0<br />
<br />
Final Rank Value (643.0) = Starting Rank Value (639.0) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 639.0
- 400 + ( ( 0.126 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 639.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      885 | 2024-12-13 | Big W          | L   | 0.683      | -            | -                | -                | -         |    -9.47 | Ang3l10wow, Bloody, hf, pavast4r, Sharpshooter    |
|            4 |     1377 | 2024-11-18 | Gods Reign     | W   | 0.517      | 0.519        | 0.014 (0.004)    | 0.360 (0.097)    | 0 (0.000) |    13.16 | Bloody, crony, hf, pavast4r, Sharpshooter         |
|            3 |     1817 | 2024-10-26 | Gods Reign     | L   | 0.363      | -            | -                | -                | -         |    -1.91 | Ang3l10wow, Bloody, Empera, Scoffic, Sharpshooter |
|            2 |     2681 | 2024-09-21 | Gods Reign     | L   | 0.130      | -            | -                | -                | -         |    -0.61 | Ang3l10wow, Bloody, hf, Scoffic, Sharpshooter     |
|            1 |     2683 | 2024-09-21 | Victores Sumus | W   | 0.130      | 0.262        | 0.005 (0.000)    | 0.120 (0.004)    | 0 (0.000) |     2.75 | Ang3l10wow, Bloody, hf, Scoffic, Sharpshooter     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($582.14)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-18 |      0.517 | $1,000.00      | $517.08         |
| 2024-09-21 |      0.130 | $500.00        | $65.06          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
