### Roster Details<br />
Team Name: Aware Impact<br />
Roster: Cloudy, eepy.rain, Lexa, thecatt, tokkis<br />
Global Rank: [234](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [70]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  588.1<br />
<br />
Final Rank Value (588.1) = Starting Rank Value (595.9) + Head To Head Adjustments (-7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.9
- 400 + ( ( 0.103 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 595.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1874 | 2024-10-18 | FlyQuest RED     | L   | 0.308      | -            | -                | -                | -         |    -4.15 | Cloudy, eepy.rain, Lexa, thecatt, tokkis |
|            5 |     2235 | 2024-10-03 | FLUFFY MAFIA     | L   | 0.208      | -            | -                | -                | -         |    -3.08 | Cloudy, eepy.rain, Lexa, thecatt, tokkis |
|            4 |     2470 | 2024-09-26 | TSM Impact       | W   | 0.161      | 0.333        | 0.001 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     2.66 | Cloudy, eepy.rain, Lexa, thecatt, tokkis |
|            3 |     2732 | 2024-09-19 | Blue Otter Karma | L   | 0.115      | -            | -                | -                | -         |    -1.80 | Cloudy, eepy.rain, Lexa, thecatt, tokkis |
|            2 |     2934 | 2024-09-12 | Lotus            | L   | 0.068      | -            | -                | -                | -         |    -1.08 | Cloudy, eepy.rain, Lexa, thecatt, tokkis |
|            1 |     3120 | 2024-09-05 | Imp Pact         | L   | 0.021      | -            | -                | -                | -         |    -0.32 | Cloudy, eepy.rain, Lexa, thecatt, tokkis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($323.31)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.308 | $1,050.00      | $323.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
